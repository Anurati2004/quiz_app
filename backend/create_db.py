import sqlite3

# Connect to DB
conn = sqlite3.connect("quiz.db")
c = conn.cursor()

# Create table if not exists
c.execute("""
CREATE TABLE IF NOT EXISTS questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT,
    option1 TEXT,
    option2 TEXT,
    option3 TEXT,
    option4 TEXT,
    answer INTEGER
)
""")

# Insert multiple questions
c.execute("""
INSERT INTO questions (question, option1, option2, option3, option4, answer)
VALUES 
('React is developed by?', 'Google', 'Facebook', 'Amazon', 'Microsoft', 2),
('JSX stands for?', 'JavaScriptX', 'JavaScriptXML', 'JSON', 'Java', 2),
('useState is used for?', 'State', 'Props', 'Event', 'DOM', 1),
('React is?', 'Library', 'Framework', 'Language', 'Database', 1),
('Which hook is used for side effects?', 'useState', 'useEffect', 'useRef', 'useContext', 2)
""")

# Commit and close
conn.commit()
conn.close()
