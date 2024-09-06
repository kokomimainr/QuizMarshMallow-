import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { axiosRequest } from "../../services/axiosinstance";
import ThemeItem from "./ThemeItem";
function ThemesPage() {
  const [themes, setThemes] = useState([]);

  const getThemes = async () => {
    try {
      const response = await axiosRequest.get("/themes");
      console.log(response);
      setThemes(response.data);
      if (response.status === 200) {
        console.log(response.data.message);
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  useEffect(() => {
    getThemes();
  }, []);

  return (
    <>
      {themes &&
        themes.map((theme) => <ThemeItem theme={theme} key={theme.id} />)}
    </>
  );
}

export default ThemesPage;
