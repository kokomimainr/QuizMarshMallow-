import React from'react';
import { NavLink } from 'react-router-dom';
function ThemesPage() {
  return (
      <>
      <button><NavLink to={'/themes/1'}>тема 1</NavLink></button>
      <button><NavLink to={'/themes/2'}>тема 2</NavLink></button>
      <button><NavLink to={'/themes/3'}>тема 3</NavLink></button>
      </>
  );
}

export default ThemesPage;