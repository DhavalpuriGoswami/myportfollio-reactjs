import React from 'react';
import { BiUpArrowCircle } from 'react-icons/bi';
import './AnimatedIcon.css'; // Import your CSS file

const AnimatedIcon = () => {
  return (
    <div className="icon-container">
      <BiUpArrowCircle className="animated-icon" />
    </div>
  );
};

export default AnimatedIcon;