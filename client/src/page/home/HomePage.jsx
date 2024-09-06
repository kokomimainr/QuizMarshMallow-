import React, { useState } from'react';
import { NavLink } from 'react-router-dom';
function HomePage() {
const [name, setName] = useState("");
const [points, setPoints] = useState("");

const onHandleSetName = (e) => {
    e.preventDefault();
    setName((prev) => e);
    setPoints(0)
}

  return (
      <>
      <h1>MARSHMALLOW QUIZ</h1>
      <form action="">
        <input type="text" placeholder='введи свое имя'/>
        <button >ввел</button>
      </form>
      <button><NavLink to={'/themes'}>НАЧАТЬ ИГРУ</NavLink></button>
      </>
  );
}

export default HomePage;