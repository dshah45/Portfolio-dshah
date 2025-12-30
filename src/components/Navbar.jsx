import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiCode } from 'react-icons/fi';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme, scrolled }) => 
    scrolled ? theme.card : 'transparent'};
  backdrop-filter: ${({ scrolled }) => 
    scrolled ? 'blur(20px)' : 'none'};
  border-bottom: ${({ theme, scrolled }) => 
    scrolled ? `1px solid ${theme.shadow}` : 'none'};
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 1rem 0;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s;
  }

  &:hover:after {
    width: 100%;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ThemeToggle = styled(motion.button)`
  background: ${({ theme }) => theme.secondary};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    transform: scale(1.1);
  }
`;

const MobileMenuToggle = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.body}F5;
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  z-index: 9999;
  overflow: hidden;
`;

const MobileNavLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  cursor: pointer;
`;

const Navbar = ({ darkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent body scroll when menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <NavContainer
        scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavContent>
          <Logo
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#home')}
          >
            <FiCode size={28} />
          </Logo>

          <NavLinks>
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </NavLink>
            ))}
            <ThemeToggle
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </ThemeToggle>
          </NavLinks>

          <MobileMenuToggle
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </MobileMenuToggle>
        </NavContent>
      </NavContainer>

      {mobileMenuOpen && (
        <MobileMenu
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        >
          <CloseButton
            onClick={closeMobileMenu}
            whileTap={{ scale: 0.9 }}
          >
            <FiX />
          </CloseButton>
          
          {navItems.map((item, index) => (
            <MobileNavLink
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
            </MobileNavLink>
          ))}

          <ThemeToggle
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </ThemeToggle>
        </MobileMenu>
      )}
    </>
  );
};

export default Navbar;