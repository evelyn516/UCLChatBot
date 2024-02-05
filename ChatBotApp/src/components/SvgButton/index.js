import React from 'react';
import './index.css'; // Import your button styles here

const Button = ({ onClick, icon: Icon, label }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {Icon && <Icon className="icon" />} {/* Render the SVG icon if provided */}
      <span>{label}</span>
    </button>
  );
};

export default Button;