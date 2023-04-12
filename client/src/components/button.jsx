import React from 'react';
import Welcome from '../pages/welcome';

const Button = ({ onClick, Welcome }) => {
  return (
    <button onClick={onClick} className="button">
      {Welcome}
    </button>
  );
};

export default Button;