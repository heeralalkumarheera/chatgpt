import { useState } from 'react';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = ({ darkMode, setDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="container">
        <a href="#home" className="logo">Portfolio</a>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        <button 
          className="mobile-menu" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>
    </header>
  );
};

export default Header;