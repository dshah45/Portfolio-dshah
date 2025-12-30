import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiBook, FiCalendar } from 'react-icons/fi';

const EducationSection = styled.section`
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

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EducationCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.primary}20;
  box-shadow: 0 10px 30px ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px ${({ theme }) => theme.primary}30;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.accent}
    );
  }
`;

const EducationHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EducationInfo = styled.div`
  flex: 1;
`;

const Institution = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Degree = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text}AA;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
`;

const GradeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 1rem;
  }
`;

const GradeCard = styled.div`
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.accent}
  );
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 15px;
  text-align: center;
  min-width: 120px;
  box-shadow: 0 5px 15px ${({ theme }) => theme.primary}30;
`;

const GradeLabel = styled.div`
  font-size: 0.8rem;
  opacity: 0.9;
  margin-bottom: 0.25rem;
`;

const GradeValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

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
    <EducationSection id="education">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionTitle variants={itemVariants}>
          Education
        </SectionTitle>

        <SectionSubtitle variants={itemVariants}>
          My academic journey in computer science and information technology
        </SectionSubtitle>

        <EducationContainer>
          {educationData.map((edu) => (
            <EducationCard
              key={edu.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <EducationHeader>
                <EducationInfo>
                  <Institution>
                    <FiBook />
                    {edu.institution}
                  </Institution>
                  
                  <Degree>{edu.degree}</Degree>
                  
                  <Duration>
                    <FiCalendar />
                    {edu.duration}
                  </Duration>
                </EducationInfo>

                <GradeContainer>
                  <GradeCard>
                    <GradeLabel>{edu.gradeType}</GradeLabel>
                    <GradeValue>{edu.grade}</GradeValue>
                  </GradeCard>
                </GradeContainer>
              </EducationHeader>
            </EducationCard>
          ))}
        </EducationContainer>
      </motion.div>
    </EducationSection>
  );
};

export default Education;