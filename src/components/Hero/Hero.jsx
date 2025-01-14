import React, { useState, useEffect } from 'react';
import './Hero.css';
import Chevron_Down from '../../assets/Chevron-Down.svg';
import { Link } from 'react-scroll';

const Hero = () => {
  const [currentText, setCurrentText] = useState('Ethic');

  // Alternate text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev === 'Ethic' ? 'Hadebe' : 'Ethic'));
    }, 3000); // Adjust timing as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1 data-text={currentText} className="glitch">{currentText}</h1>
        <Link to='about' smooth={true} offset={0} duration={500}>
          <img src={Chevron_Down} alt="Scroll Down" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
