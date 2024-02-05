import React from 'react';
import './index.css'; // Import your button styles here

const Button = ({ onClick, icon: Icon, sub_icon: SubIcon, isChatBotOpen }) => {
  return (
    <div className='button-container'>
    
    {
      isChatBotOpen ? (
        <>
    <button className={`custom-button ${isChatBotOpen ? 'box active' : 'box inactive'}`} onClick={onClick}>
      {Icon && <Icon className="icon" />} {/* Render the SVG icon if provided */}
    </button>
    <button className={`close-button`} onClick={onClick}>
          {SubIcon && <SubIcon className="sub-icon" />} {/* Render the SVG icon if provided */}
      </button>

  </>

) : (
  <>
    <button className={`custom-button ${isChatBotOpen ? 'box active' : 'box inactive'}`} onClick={onClick}>
      {Icon && <Icon className="icon" />} {/* Render the SVG icon if provided */}
    </button>
  </>
)

}
</div>    




  );
};

export default Button;