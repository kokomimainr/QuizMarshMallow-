import React from'react';
import { NavLink } from 'react-router-dom';
function ThemeItem({theme}) {
  return (
    <button>
        {theme.title}
    <NavLink to={`/themes/${theme.id}`}>{theme.title}</NavLink>
  </button>
  );
}

export default ThemeItem;