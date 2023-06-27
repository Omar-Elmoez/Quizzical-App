import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
// import CheckAnswers from './pages/CheckAnswers';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<Questions />} />
      {/* <Route path="/checkAnswers" element={<CheckAnswers />} /> */}
    </Routes>
  );
}
