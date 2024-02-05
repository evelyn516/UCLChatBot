import React from 'react';
import './index.css'; // Import your button styles here

const Button = ({ onClick, icon: Icon, label, isChatBotOpen }) => {
  return (
    <button className={`custom-button ${isChatBotOpen ? 'box active' : 'box inactive'}`} onClick={onClick}>
      {Icon && <Icon className="icon" />} {/* Render the SVG icon if provided */}
      <span>{label}</span>
    </button>
  );
};

export default Button;