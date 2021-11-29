import React from 'react';

import MainMenu from '../main-menu/MainMenu';
import './Head.css'

const Head = () => {
  return (
    <div className="Head">
      <div className="Head-logo">Logo</div>
      <MainMenu/>
    </div>
  )
};

export default Head;
