import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-900 p-12 rounded-3xl shadow-2xl shadow-blue-700/50 text-center transform transition-transform duration-500 hover:scale-105 animate-fadeIn">
        <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
          Welcome to the Quiz
        </h2>
        <p className="mb-6 text-gray-400 text-lg animate-fadeIn delay-300">
          Test your React knowledge
        </p>
        <button
          onClick={() => navigate("/quiz")}
          className="px-10 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg shadow-blue-500/50 hover:scale-105 transform transition-all duration-300 animate-bounce"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
