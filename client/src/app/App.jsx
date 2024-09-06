import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "../page/home/HomePage";
import ThemesPage from "../page/themes/ThemesPage";
import QuestionsPage from "../page/questions/QuestionsPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/themes" element={<ThemesPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
      </Routes>
    </>
  );
}

export default App;
