import React from'react';
import { NavLink } from 'react-router-dom';
function HomePage() {
  return (
      <>
      <h1>MARSHMALLOW QUIZ</h1>
      <button><NavLink to={'/themes/'}>НАЧАТЬ ИГРУ</NavLink></button>
      </>
  );
}

export default HomePage;