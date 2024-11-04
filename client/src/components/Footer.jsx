import React from 'react';
import whatsapp from '../assets/Icons/whatsapp.png';
import email from '../assets/Icons/email.png';
import linkedin from '../assets/Icons/linkedin.png';
import github from '../assets/Icons/github.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-spacer"></div>
      <div className="footer-content">
        <div className="footer-text-content">
          <p>Interested to work with me?</p>
          <h3>Get in touch.</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
            <a href="mailto:example@gmail.com">
              <img src={email} alt="Email" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
          </div>
        </div>
        <div className='copyright-bg'>
        <div className="footer-info">
          
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquam aspernatur ullam tempore ratione, voluptatum vel. Earum quia ullam perferendis!</p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
