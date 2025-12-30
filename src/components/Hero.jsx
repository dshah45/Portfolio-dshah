import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const HeroSection = styled.section`
  id: home;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 2rem 0 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 100px 1rem 0 1rem;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.primary}20,
      ${({ theme }) => theme.accent}10,
      transparent
    );
    z-index: -1;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
`;

const HeroContent = styled.div`
  z-index: 2;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.text},
    ${({ theme }) => theme.primary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 600;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1.5rem;
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.text}CC;
  margin-bottom: 2rem;
  max-width: 500px;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(motion.a)`
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px ${({ theme }) => theme.primary}40;
  }
`;

const SecondaryButton = styled(motion.a)`
  background: transparent;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid ${({ theme }) => theme.primary};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-5px);
  }
`;

const HeroImage = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled(motion.div)`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
    animation: pulse 2s infinite;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const ProfileImageInner = styled.div`
  width: 95%;
  height: 95%;
  border-radius: 50%;
  background: ${({ theme }) => theme.body};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  z-index: 2;
  position: relative;

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  background: ${({ theme }) => theme.primary}30;
  border-radius: 50%;
`;

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
    // For demo purposes, you can replace this with actual CV download
    window.open('https://github.com/dshah45', '_blank');
  };

  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <HeroTitle variants={itemVariants}>
              Hello, I'm Dhruv Jasmin Shah
            </HeroTitle>

            <HeroSubtitle variants={itemVariants}>
              Full Stack Developer
            </HeroSubtitle>

            <HeroDescription variants={itemVariants}>
              Dedicated and motivated developer passionate about exploring new technologies. 
              Skilled in Python, Django, React, and modern web development. 
              Looking forward to grab opportunities and utilize my skills for organizational growth.
            </HeroDescription>

            <ButtonContainer variants={itemVariants}>
              <PrimaryButton
                onClick={handleContactClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail />
                Get In Touch
              </PrimaryButton>

              <SecondaryButton
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload />
                Download CV
              </SecondaryButton>
            </ButtonContainer>

            <SocialLinks variants={itemVariants}>
              <SocialLink
                href="https://github.com/dshah45"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub />
              </SocialLink>

              <SocialLink
                href="https://www.linkedin.com/in/dhruv-shah-824678183/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin />
              </SocialLink>

              <SocialLink
                href="mailto:dshah1359@gmail.com"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiMail />
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </HeroContent>

        <HeroImage>
          <ProfileImage>
            <ProfileImageInner>
              <img
                src="/dshah.png"
                alt="Dhruv Shah"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
            </ProfileImageInner>
          </ProfileImage>

          <FloatingElements>
            <FloatingElement
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
            <FloatingElement
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
            <FloatingElement
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
          </FloatingElements>
        </HeroImage>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;