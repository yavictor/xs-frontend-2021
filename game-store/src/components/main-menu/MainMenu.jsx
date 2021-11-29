import React from 'react';

import './MainMenu.css'

const MainMenu = () => {
  const menuItems = ['About store', 'Catalog', 'News', 'Login'];

  return (
    <>
      <span className="MainMenu">
        {menuItems.map((item) => (
          <button key={item} className="MainMenu-button">
            {item}
          </button>
        ))}
      </span>
    </>
  )
};

export default MainMenu;
