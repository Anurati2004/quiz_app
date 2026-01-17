import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const score = state?.score ?? 0;
  const total = state?.total ?? 0;

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-900 p-10 rounded-3xl shadow-2xl shadow-purple-700/50 text-center transform transition-transform duration-500 hover:scale-105 animate-fadeIn">
        <h2 className="text-4xl font-extrabold text-white mb-4 animate-pulse">
          Your Result
        </h2>
        <p className="text-xl text-yellow-400 mb-6">
          Score: {score} / {total}
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-md shadow-purple-500/50 hover:scale-105 transform transition-all duration-300"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
