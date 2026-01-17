import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-extrabold tracking-wider animate-pulse">
        🎯 Online Quiz
      </h1>
      <nav className="space-x-6">
        <Link 
          to="/" 
          className="relative group text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
        >
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
        </Link>
        <Link 
          to="/quiz" 
          className="relative group text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
        >
          Quiz
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
        </Link>
      </nav>
    </header>
  );
}
