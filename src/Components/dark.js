import React, { useState } from 'react';
import './Button.css'; // You can define styles for your button in a separate CSS file

const DarkWhiteButton = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prevState => !prevState);
  };

  return (
    <button className={`button ${isDark ? 'dark' : 'white'}`} onClick={toggleTheme}>
      {isDark ? 'Dark' : 'White'} Button
    </button>
  );
};

export default DarkWhiteButton;
