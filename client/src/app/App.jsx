import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "../page/home/HomePage";
import ThemesPage from "../page/themes/ThemesPage";
import QuestionsPage from "../page/questions/QuestionsPage";
import HeaderPage from "../widgets/HeaderPage";

function App() {
  const [name, setName] = useState("");
  const [points, setPoints] = useState(0);

  return (
    <>
      <HeaderPage name={name} points={points} />
      <Routes>
        <Route
          path="/home"
          element={<HomePage name={name} setName={setName} />}
        />
        <Route path="/themes" element={<ThemesPage />} />
        <Route
          path="/themes/:themeId"
          element={<QuestionsPage setPoints={setPoints} />}
        />
      </Routes>
    </>
  );
}

export default App;
