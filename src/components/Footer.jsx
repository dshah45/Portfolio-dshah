import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#about' },
    { name: 'Experience', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#about' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <motion.h3 
            className="footer-name"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Dhruv Jasmin Shah
          </motion.h3>
          
          <motion.div 
            className="footer-nav"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {navItems.map((item, index) => (
              <button
                key={item.name}
                className="footer-link"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </button>
            ))}
          </motion.div>

          <motion.div 
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="https://github.com/dshah45"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-shah-824678183/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://twitter.com/dhruvjshah"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FiTwitter />
            </a>
            <a
              href="https://instagram.com/dhruvjshah"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FiInstagram />
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>© 2024 - Dhruv Jasmin Shah. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
