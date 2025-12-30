import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode, FiDatabase, FiGlobe } from 'react-icons/fi';

const ProjectsSection = styled.section`
  padding: 100px 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  background: ${({ theme }) => theme.body};

  @media (max-width: 768px) {
    padding: 80px 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
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

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: ${({ theme }) => theme.text}CC;
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.primary}20;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px ${({ theme }) => theme.primary}30;
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.primary}40,
    ${({ theme }) => theme.accent}40
  );
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: ${({ theme }) => theme.primary};
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, ${({ theme }) => theme.primary}20);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover:before {
    opacity: 1;
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text}CC;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.primary}20;
  color: ${({ theme }) => theme.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  &.primary {
    background: ${({ theme }) => theme.primary};
    color: white;

    &:hover {
      background: ${({ theme }) => theme.accent};
      transform: scale(1.05);
    }
  }

  &.secondary {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.primary}40;

    &:hover {
      border-color: ${({ theme }) => theme.primary};
      transform: scale(1.05);
    }
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'House Price Prediction System',
      description: 'Designed an application that predicts house prices based on location, area, bathrooms, and bedrooms. Implemented machine learning models for accurate price prediction with data preprocessing and model testing.',
      tech: ['Python', 'Flask', 'Machine Learning', 'HTML', 'CSS'],
      category: 'Machine Learning',
      github: 'https://github.com/dshah45',
      demo: 'https://github.com/dshah45',
      icon: <FiDatabase />
    },
    {
      id: 2,
      title: 'Cyntra E-commerce Website',
      description: 'Designed a fully working E-commerce website with various features such as shopping cart, reviews, order management. Contributed to developing webpages, payment integration, and ratings system.',
      tech: ['ReactJS', 'Django', 'Python', 'HTML', 'CSS'],
      category: 'Full Stack',
      github: 'https://github.com/dshah45',
      demo: 'https://github.com/dshah45',
      icon: <FiGlobe />
    },
    {
      id: 3,
      title: 'E-VoterID: Automated VoterID System',
      description: 'A diploma final year project - an automated portal for 18+ citizens to get their VoterID without manual or long tiring online processes. Integrated with backend and email authentication.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap'],
      category: 'Web Development',
      github: 'https://github.com/dshah45',
      demo: 'https://github.com/dshah45',
      icon: <FiCode />
    },
    {
      id: 4,
      title: 'Donation Portal',
      description: 'Created during internship at The Sparks Foundation. A donation portal with integrated payment gateway for secure transactions. Hosted the website online with responsive design.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Payment Gateway', 'Bootstrap'],
      category: 'Web Development',
      github: 'https://github.com/dshah45',
      demo: 'https://github.com/dshah45',
      icon: <FiGlobe />
    }
  ];

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

  return (
    <ProjectsSection id="projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionTitle variants={itemVariants}>
          Featured Projects
        </SectionTitle>

        <SectionSubtitle variants={itemVariants}>
          Here are some of my recent projects that showcase my skills and experience
        </SectionSubtitle>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              layout
            >
              <ProjectImage>
                {project.icon}
              </ProjectImage>

              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>

                <ProjectTech>
                  {project.tech.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </ProjectTech>

                <ProjectLinks>
                  <ProjectLink
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink />
                    Live Demo
                  </ProjectLink>

                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub />
                    Code
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </motion.div>
    </ProjectsSection>
  );
};

export default Projects;