import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const FooterSection = styled.footer`
  background: ${({ theme }) => theme.secondary};
  padding: 4rem 0 2rem;
  border-top: 1px solid ${({ theme }) => theme.primary}20;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const FooterAbout = styled(motion.div)``;

const FooterLogo = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const FooterDescription = styled.p`
  color: ${({ theme }) => theme.text}CC;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 400px;

  @media (max-width: 968px) {
    max-width: none;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 45px;
  height: 45px;
  background: ${({ theme }) => theme.card};
  border: 2px solid ${({ theme }) => theme.primary}40;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const FooterColumn = styled(motion.div)``;

const FooterTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.text}CC;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
    padding-left: 5px;
  }
`;

const FooterBottom = styled.div`
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.primary}20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.text}99;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const BackToTop = styled(motion.button)`
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.accent};
    transform: translateY(-2px);
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <FooterSection>
      <FooterContainer>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FooterContent>
            <FooterAbout variants={itemVariants}>
              <FooterLogo>Dhruv Shah</FooterLogo>
              <FooterDescription>
                Full Stack Developer passionate about creating innovative solutions and bringing ideas to life through code. 
                Always excited to work on challenging projects and learn new technologies.
              </FooterDescription>
              <FooterSocial>
                <SocialLink
                  href="https://github.com/dshah45"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiGithub />
                </SocialLink>

                <SocialLink
                  href="https://www.linkedin.com/in/dhruv-shah-824678183/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiLinkedin />
                </SocialLink>

                <SocialLink
                  href="mailto:dshah1359@gmail.com"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiMail />
                </SocialLink>
              </FooterSocial>
            </FooterAbout>

            <FooterColumn variants={itemVariants}>
              <FooterTitle>Quick Links</FooterTitle>
              <FooterLinks>
                <FooterLink onClick={() => scrollToSection('home')}>
                  Home
                </FooterLink>
                <FooterLink onClick={() => scrollToSection('about')}>
                  About
                </FooterLink>
                <FooterLink onClick={() => scrollToSection('projects')}>
                  Projects
                </FooterLink>
                <FooterLink onClick={() => scrollToSection('contact')}>
                  Contact
                </FooterLink>
              </FooterLinks>
            </FooterColumn>

            <FooterColumn variants={itemVariants}>
              <FooterTitle>Contact Info</FooterTitle>
              <FooterLinks>
                <FooterLink href="mailto:dshah1359@gmail.com">
                  dshah1359@gmail.com
                </FooterLink>
                <FooterLink>
                  Mumbai, India
                </FooterLink>
                <FooterLink href="https://github.com/dshah45" target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </FooterLink>
              </FooterLinks>
            </FooterColumn>
          </FooterContent>

          <FooterBottom>
            <Copyright>
              © {currentYear} Dhruv Shah. Made with <FiHeart style={{ color: '#ef4444' }} /> and React
            </Copyright>

            <BackToTop
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Top
            </BackToTop>
          </FooterBottom>
        </motion.div>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;