import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiGitBranch, FiServer } from 'react-icons/fi';

const AboutSection = styled.section`
  padding: 100px 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;

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

const AboutContainer = styled.div`
  display: block;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    margin-bottom: 3rem;
  }
`;

const AboutContent = styled(motion.div)``;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.text}DD;
  margin-bottom: 2rem;
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.primary}20;
`;

const ExperienceTitle = styled.h4`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ExperienceCompany = styled.h5`
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

const ExperienceDate = styled.p`
  color: ${({ theme }) => theme.text}99;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ExperienceDescription = styled.p`
  color: ${({ theme }) => theme.text}CC;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const SkillsSection = styled.div`
  margin-top: 4rem;
`;

const SkillsTitle = styled(motion.h3)`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.text};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  padding: 2rem 1.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.primary}20;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px ${({ theme }) => theme.primary}20;
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const SkillTitle = styled.h4`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  font-weight: 600;
`;

const SkillList = styled.ul`
  list-style: none;
  color: ${({ theme }) => theme.text}CC;
  font-size: 0.95rem;
  line-height: 1.6;

  li {
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1rem;

    &:before {
      content: '▶';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.accent};
      font-size: 0.8rem;
    }
  }
`;

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

  const skillCategories = [
    {
      icon: <FiCode />,
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap']
    },
    {
      icon: <FiServer />,
      title: 'Backend',
      skills: ['Python', 'Django', 'Flask', 'SQL', 'REST APIs']
    },
    {
      icon: <FiDatabase />,
      title: 'Database',
      skills: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB']
    },
    {
      icon: <FiGitBranch />,
      title: 'Tools & Others',
      skills: ['Git & GitHub', 'VS Code', 'Docker', 'AWS']
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
    <AboutSection id="about">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionTitle variants={itemVariants}>
          About Me
        </SectionTitle>

        <SectionSubtitle variants={itemVariants}>
          Get to know more about who I am, what I do, and what skills I have
        </SectionSubtitle>

        <AboutContainer>
          <AboutContent variants={itemVariants}>
            <AboutText>
              I'm Dhruv Jasmin Shah, a passionate Full Stack Developer with a Bachelor's degree in Information Technology 
              from Thadomal Shahani Engineering College. I love creating digital solutions that make a difference.
            </AboutText>

            <AboutText>
              With experience in both frontend and backend technologies, I enjoy working on challenging projects 
              that push the boundaries of what's possible. My goal is to continuously learn and grow while 
              contributing to meaningful projects that have a positive impact.
            </AboutText>

            <AboutText>
              When I'm not coding, you can find me playing cricket, volleyball, or working on image editing projects. 
              I believe in maintaining a healthy work-life balance and constantly exploring new technologies.
            </AboutText>

            <ExperienceGrid>
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <ExperienceTitle>{exp.title}</ExperienceTitle>
                  <ExperienceCompany>{exp.company}</ExperienceCompany>
                  <ExperienceDate>{exp.date}</ExperienceDate>
                  <ExperienceDescription>{exp.description}</ExperienceDescription>
                </ExperienceCard>
              ))}
            </ExperienceGrid>
          </AboutContent>
        </AboutContainer>

        <SkillsSection>
          <SkillsTitle variants={itemVariants}>
            Skills & Technologies
          </SkillsTitle>

          <SkillsGrid>
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <SkillIcon>
                  {category.icon}
                </SkillIcon>
                <SkillTitle>{category.title}</SkillTitle>
                <SkillList>
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </SkillList>
              </SkillCategory>
            ))}
          </SkillsGrid>
        </SkillsSection>
      </motion.div>
    </AboutSection>
  );
};

export default About;