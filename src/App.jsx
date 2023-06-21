import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<Questions />} />
    </Routes>
  );
}
