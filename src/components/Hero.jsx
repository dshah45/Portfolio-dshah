import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiDownload } from 'react-icons/fi';
import ProfileIcon from '../assets/dshah.png';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your PDF file in public folder
    link.download = 'Dhruv_Shah_Resume.pdf'; // Downloaded filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="hero-title" variants={itemVariants}>
              Hello, I'm Dhruv Shah
            </motion.h1>

            <motion.h2 className="hero-subtitle" variants={itemVariants}>
              Full Stack Developer
            </motion.h2>

            <motion.p className="hero-description" variants={itemVariants}>
              Dedicated and motivated developer passionate about exploring new technologies. 
              Skilled in Python, Django, React, and modern web development. 
              Looking forward to grab opportunities and utilize my skills for organizational growth.
            </motion.p>

            <motion.div className="button-container" variants={itemVariants}>
              <motion.button
                className="primary-button"
                onClick={handleContactClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail />
                Get In Touch
              </motion.button>

              <motion.button
                className="secondary-button"
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload />
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <div className="hero-image">
          <div className="profile-image">
            <div className="profile-image-inner">
              <img
                src={ProfileIcon}
                alt="Dhruv Shah"
              />
            </div>
          </div>

          <div className="floating-elements">
            <motion.div
              className="floating-element"
              style={{
                width: '20px',
                height: '20px',
                top: '20%',
                left: '10%'
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="floating-element"
              style={{
                width: '15px',
                height: '15px',
                top: '60%',
                right: '10%'
              }}
              animate={{
                y: [0, -15, 0],
                x: [0, 15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
            <motion.div
              className="floating-element"
              style={{
                width: '25px',
                height: '25px',
                bottom: '20%',
                left: '20%'
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;