import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiGitBranch, FiServer } from 'react-icons/fi';
import HtmlIcon from '../assets/html.png';
import CssIcon from '../assets/css.png';
import JsIcon from '../assets/js.png';
import ReactIcon from '../assets/react.png';
import BootstrapIcon from '../assets/bootstrap.png';
import PythonIcon from '../assets/python.png';
import DjangoIcon from '../assets/django.png';
import VscodeIcon from '../assets/vscode.png';
import GithubIcon from '../assets/github.png';
import './About.css';

const About = () => {
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

  const getSkillIconClass = (skillName) => {
    const className = skillName.toLowerCase().replace(/\s+/g, '').replace('&', '');
    switch (className) {
      case 'html': return 'skill-icon html';
      case 'css': return 'skill-icon css';
      case 'javascript': return 'skill-icon javascript';
      case 'react': return 'skill-icon react';
      case 'python': return 'skill-icon python';
      case 'django': return 'skill-icon django';
      case 'gitgithub': return 'skill-icon github';
      case 'aws': return 'skill-icon aws';
      default: return 'skill-icon default';
    }
  };

  const skillCategories = [
    {
      icon: <FiCode />,
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: <img src={HtmlIcon} alt="HTML" /> },
        { name: 'CSS', icon: <img src={CssIcon} alt="CSS" /> },
        { name: 'JavaScript', icon: <img src={JsIcon} alt="JavaScript" /> },
        { name: 'React', icon: <img src={ReactIcon} alt="React" /> },
        { name: 'Bootstrap', icon: <img src={BootstrapIcon} alt="Bootstrap" /> }
      ]
    },
    {
      icon: <FiServer />,
      title: 'Backend',
      skills: [
        { name: 'Python', icon: <img src={PythonIcon} alt="Python" /> },
        { name: 'Django', icon: <img src={DjangoIcon} alt="Django" /> },
        { name: 'Flask', icon: <span>🔥</span> },
        { name: 'SQL', icon: <span>💾</span> },
        { name: 'REST APIs', icon: <span>🔌</span> }
      ]
    },
    {
      icon: <FiDatabase />,
      title: 'Database',
      skills: [
        { name: 'MySQL', icon: <span>🐬</span> },
        { name: 'PostgreSQL', icon: <span>🐘</span> },
        { name: 'SQLite', icon: <span>💼</span> },
        { name: 'MongoDB', icon: <span>🍃</span> }
      ]
    },
    {
      icon: <FiGitBranch />,
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', icon: <img src={GithubIcon} alt="Git & GitHub" /> },
        { name: 'VS Code', icon: <img src={VscodeIcon} alt="VS Code" /> },
        { name: 'Docker', icon: <span>🐳</span> },
        { name: 'AWS', icon: <span>☁️</span> }
      ]
    }
  ];

  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'The Sparks Foundation',
      date: 'July 2021 - August 2021',
      description: 'Worked as intern to create and deploy websites. Created Donation Portal with Payment Gateway and hosted the website online.'
    },
    {
      title: 'Student Intern',
      company: 'Rite Technologies',
      date: 'May 2019 - June 2019',
      description: 'Trained on Web Development Technologies such as HTML, CSS, JavaScript, Bootstrap. Created Web Pages for the company ongoing project.'
    }
  ];

  return (
    <section className="about-section" id="about">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          About Me
        </motion.h2>

        <motion.p className="section-subtitle" variants={itemVariants}>
          Get to know more about who I am, what I do, and what skills I have
        </motion.p>

        <div className="about-container">
          <motion.div className="about-content" variants={itemVariants}>
            <p className="about-text">
              I'm Dhruv Jasmin Shah, a passionate Full Stack Developer with a Bachelor's degree in Information Technology 
              from Thadomal Shahani Engineering College. I love creating digital solutions that make a difference.
            </p>

            <p className="about-text">
              With experience in both frontend and backend technologies, I enjoy working on challenging projects 
              that push the boundaries of what's possible. My goal is to continuously learn and grow while 
              contributing to meaningful projects that have a positive impact.
            </p>

            <p className="about-text">
              When I'm not coding, you can find me playing cricket, volleyball, or working on image editing projects. 
              I believe in maintaining a healthy work-life balance and constantly exploring new technologies.
            </p>

            <div className="experience-grid">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="experience-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h4 className="experience-title">{exp.title}</h4>
                  <h5 className="experience-company">{exp.company}</h5>
                  <p className="experience-date">{exp.date}</p>
                  <p className="experience-description">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="skills-section">
          <motion.h3 
            className="skills-title"
            variants={itemVariants}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ⚡ Skills & Technologies
          </motion.h3>

          <motion.p 
            className="skills-subtitle"
            variants={itemVariants}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            "Technology is best when it brings people together" 💻✨
          </motion.p>

          <div className="skills-container">
            <div className="floating-background" />
            
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                className="category-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              >
                <motion.div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h4 className="category-title">{category.title}</h4>
                </motion.div>
                
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: skillIndex * 0.1,
                        duration: 0.3
                      }}
                    >
                      <div className={getSkillIconClass(skill.name)}>
                        {skill.icon}
                      </div>
                      <h4 className="skill-name">{skill.name}</h4>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;