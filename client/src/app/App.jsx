import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "../page/home/HomePage";
import ThemesPage from "../page/themes/ThemesPage";
import QuestionsPage from "../page/questions/QuestionsPage";
import HeaderPage from "../widgets/HeaderPage";

function App() {

  return (
    <>
    <HeaderPage/>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/themes" element={<ThemesPage/>} />
        <Route path="/themes/:themeId" element={<QuestionsPage />} />
      </Routes>
    </>
  );
}

export default App;
