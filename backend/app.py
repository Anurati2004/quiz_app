from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

@app.route('/api/questions')
def get_questions():
    try:
        conn = sqlite3.connect('quiz.db')
        cur = conn.cursor()
        cur.execute('SELECT * FROM questions')
        rows = cur.fetchall()
        conn.close()

        data = []
        for q in rows:
            # Clean options
            options = [q[2].strip(), q[3].strip(), q[4].strip(), q[5].strip()]

            # Convert 1-based DB answer to 0-based index
            answer_index = int(q[6]) - 1

            data.append({
                'id': q[0],
                'question': q[1],
                'options': options,
                'answer': answer_index
            })

        return jsonify(data)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run()
