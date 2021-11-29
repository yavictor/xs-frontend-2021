import React from 'react';

import './Input.css';

const Input = (props) => {
  return (
    <>
      <input
        className="Input"
        type={props.type}
        id="email"
        required
        maxLength="255"
        minLength="1"
        placeholder={props.placeholder}
      />
    </>
  )
}

export default Input;
