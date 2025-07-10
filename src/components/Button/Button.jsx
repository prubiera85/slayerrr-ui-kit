import React from 'react';
import './Button.scss';

// variant: primary, secondary, outline, transparent, danger, success
// size: small, medium, large 
// disabled: boolean
// loading: boolean


const Button = ({ children,  variant = 'primary', size = 'medium', disabled = false, loading = false}) => {

    const buttonClass = `button button--${variant} button--${size} ${disabled ? 'button--disabled' : ''} ${loading ? 'button--loading' : ''}`;

  return (
    <button className={buttonClass} >
      {children}
    </button>
  );
};

export default Button; 