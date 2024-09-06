import React, { useState } from'react';
import { NavLink } from 'react-router-dom';
function HomePage({name, setName}) {

  return (
      <>
      <h1>MARSHMALLOW QUIZ</h1>
        <input type="text" placeholder='введи свое имя' value={name} onChange={(e) => setName(e.target.value)}/>
      <button><NavLink to={'/themes'}>НАЧАТЬ ИГРУ</NavLink></button>
      </>
  );
}

export default HomePage;