
import React from 'react';
import './Footer.css';
import githubLogo from "../../assets/githubimg.png"
import linkedinLogo from '../../assets/LinkedIn.png'

function Footer() {
  return (
    <footer className="footer">
      
      <div className="social-icons">
      <p>Airbnb Clone 2023</p>
        <a href="https://github.com/dannyboyjr" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="Github Icon" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/danieljameskimball/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn Icon" className="icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
  