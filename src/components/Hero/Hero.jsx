import { useState, useEffect } from 'react';
import './Hero.css';
import Chevron_Down from '../../assets/Chevron-Down.svg';
import { sectionLink } from '../../scrollToSection';

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
    <div id='home' className='hero container'>
      <div className="hero-text">
        <h1 data-text={currentText} className="glitch">{currentText}</h1>
        <a href='#about' onClick={sectionLink('about')}>
          <img src={Chevron_Down} alt="Scroll down to About" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
