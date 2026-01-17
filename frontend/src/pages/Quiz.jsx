import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  const [answered, setAnswered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://quiz-backend-dofg.onrender.com")
      .then(res => res.json())
      .then(data => setQuestions(data))
      .catch(err => console.error("Failed to fetch questions:", err));
  }, []);

  useEffect(() => {
    if (!answered && time === 0) handleAnswer(-1);
    const timer = setInterval(() => setTime(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [time, answered]);

  useEffect(() => {
    setTime(10);
    setAnswered(false);
  }, [current]);

  const handleAnswer = (i) => {
    if (answered) return;
    setAnswered(true);

    const isCorrect = i === questions[current].answer;
    const newScore = isCorrect ? score + 1 : score;

    if (isCorrect) setScore(prev => prev + 1);

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(c => c + 1);
      } else {
        navigate('/result', { state: { score: newScore, total: questions.length } });
      }
      setAnswered(false);
    }, 500);
  };

  if (!questions.length)
    return <p className="text-center mt-10 text-white text-lg">Loading questions...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl shadow-blue-700/50 w-96 transform transition-transform duration-500 hover:scale-105 animate-fadeIn">
        <h3 className="text-xl font-bold text-white mb-2 animate-pulse">
          {questions[current].question}
        </h3>
        <p className="text-yellow-400 mb-4 font-semibold">
          Time Left: {time}s
        </p>
        <div className="space-y-3">
          {questions[current].options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 shadow-md shadow-purple-500/50"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
