import React from 'react';
import './Home.css'
import Title from '../../components/title/Title';

const HomeScreen = () => {
  return (
    <div className="Home">
      <div className="Home-background">
        <div className="Home-container">
          <Title>Buy games in one click</Title>
          <p>A store that is twice as fast, convenient and safer to buy your favorite games and entertainment for the whole family</p>
          <span>
          <button className="Home-button-login">
            Login
          </button>
          <button className="Home-button-catalog">
            Catalog
          </button>
        </span>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
