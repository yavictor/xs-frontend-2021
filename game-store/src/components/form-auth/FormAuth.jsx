import React from 'react';

import Input from '../input/Input';
import './FormAuth.css';

const FormAuth = () => {
  return (
    <div className="FormAuth">
      <form className="FormAuth-container" action="" method="post">
        <Input type="email" placeholder="Email"/>
        <Input type="password" placeholder="Password"/>
        <button className="FormAuth-button" type="submit">Login</button>
      </form>
    </div>
  )
}

export default FormAuth;
