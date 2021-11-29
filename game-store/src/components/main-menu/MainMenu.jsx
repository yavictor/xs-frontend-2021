import React from 'react';

import './MainMenu.css'

const MainMenu = () => {
  const menuItems = ['About store', 'Catalog', 'News', 'Login'];

  return (
    <>
      <nav className="MainMenu">
        <ul className="MainMenu-list">
          {menuItems.map((item) => (
            <li key={item} className="MainMenu-button">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
};

export default MainMenu;
