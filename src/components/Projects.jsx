import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode, FiDatabase, FiGlobe } from 'react-icons/fi';
import './Projects.css';

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
    <section className="projects-section" id="projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Featured Projects
        </motion.h2>

        <motion.p className="section-subtitle" variants={itemVariants}>
          Here are some of my recent projects that showcase my skills and experience
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="project-image">
                {project.icon}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink />
                    Live Demo
                  </motion.a>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;