import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";


export default function App() {
return (
<div className="flex flex-col min-h-screen">
<Header />
<main className="grow">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/quiz" element={<Quiz />} />
<Route path="/result" element={<Result />} />
</Routes>
</main>
<Footer />
</div>
);
}