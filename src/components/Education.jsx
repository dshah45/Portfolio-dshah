import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiCalendar } from 'react-icons/fi';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: 'Thadomal Shahani Engineering College',
      degree: 'Bachelor of Engineering in Information Technology',
      duration: '2020 - Present',
      grade: '9.38',
      gradeType: 'CGPA'
    },
    {
      id: 2,
      institution: 'Shri Bhagubhai Mafatlal Polytechnic',
      degree: 'Diploma in Computer Engineering',
      duration: '2017 - 2020',
      grade: '94.2%',
      gradeType: 'Percentage'
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
    <section className="education-section" id="education">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Education
        </motion.h2>

        <motion.p className="section-subtitle" variants={itemVariants}>
          My academic journey in computer science and information technology
        </motion.p>

        <div className="education-container">
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              className="education-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="education-header">
                <div className="education-info">
                  <h3 className="education-details">
                    <FiBook />
                    {edu.institution}
                  </h3>
                  
                  <h4 className="education-details">{edu.degree}</h4>
                  
                  <p className="education-details">
                    <FiCalendar />
                    {edu.duration}
                  </p>
                </div>

                <div className="grade-container">
                  <div className="grade-card">
                    <div className="grade-label">{edu.gradeType}</div>
                    <div className="grade-value">{edu.grade}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;