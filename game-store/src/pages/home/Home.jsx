import React from 'react';
import './Home.css'
import Title from '../../components/title/Title';

const HomeScreen = () => {
  return (
    <div className="Home">
      <div className="Home-background">
        <div className="Home-container">
          <Title>Add Rick<br/> to your team</Title>
          <p>Or Morty or someone you want</p>
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
