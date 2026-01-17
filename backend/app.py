from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3
import os

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Absolute DB path (IMPORTANT for deployment)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "quiz.db")


@app.route("/")
def home():
    return "Quiz Backend Running"


@app.route("/api/questions")
def get_questions():
    try:
        conn = sqlite3.connect(DB_PATH)
        cur = conn.cursor()
        cur.execute("SELECT * FROM questions")
        rows = cur.fetchall()
        conn.close()

        data = []

        for q in rows:
            options = [
                q[2].strip(),
                q[3].strip(),
                q[4].strip(),
                q[5].strip()
            ]

            answer_index = int(q[6]) - 1

            # Safety check
            if answer_index < 0 or answer_index >= len(options):
                continue

            data.append({
                "id": q[0],
                "question": q[1],
                "options": options,
                "answer": answer_index
            })

        return jsonify(data)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
