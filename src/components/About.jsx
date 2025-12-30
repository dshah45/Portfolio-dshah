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
  position: relative;
  padding: 3rem 0;
`;

const SkillsTitle = styled(motion.h3)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.text},
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.accent}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
    border-radius: 2px;
  }
`;

const SkillsSubtitle = styled(motion.p)`
  text-align: center;
  color: ${({ theme }) => theme.text}AA;
  margin-bottom: 4rem;
  font-size: 1.2rem;
  font-style: italic;
`;

const SkillsContainer = styled.div`
  position: relative;
`;

const FloatingBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, ${({ theme }) => theme.primary}10 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, ${({ theme }) => theme.accent}10 0%, transparent 50%),
    radial-gradient(circle at 40% 60%, ${({ theme }) => theme.primary}05 0%, transparent 50%);
  border-radius: 20px;
  z-index: 0;
`;

const SkillsOrbit = styled.div`
  position: relative;
  min-height: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  z-index: 1;
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border: 2px solid transparent;
  border-radius: 20px;
  padding: 1.5rem 2rem;
  min-width: 120px;
  text-align: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 8px 32px ${({ theme }) => theme.shadow};
  backdrop-filter: blur(10px);
  
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.card},
    ${({ theme }) => theme.secondary}
  );
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 18px;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.primary}20,
      ${({ theme }) => theme.accent}20
    );
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      transparent,
      ${({ theme }) => theme.primary}40,
      transparent
    );
    opacity: 0;
    transition: all 0.6s ease;
    animation: rotate 4s linear infinite;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.05);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 
      0 20px 40px ${({ theme }) => theme.primary}30,
      0 0 0 1px ${({ theme }) => theme.primary}40;
    
    &:before {
      opacity: 1;
    }
    
    &:after {
      opacity: 1;
    }
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
  position: relative;
  z-index: 2;
  
  /* Icon colors based on technology */
  color: ${({ tech, theme }) => {
    switch(tech) {
      case 'HTML': return '#E34F26';
      case 'CSS': return '#1572B6';
      case 'JavaScript': return '#F7DF1E';
      case 'React': return '#61DAFB';
      case 'Python': return '#3776AB';
      case 'Django': return '#092E20';
      case 'Git & GitHub': return '#F05032';
      case 'AWS': return '#FF9900';
      default: return theme.primary;
    }
  }};
`;

const SkillName = styled.h4`
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  font-size: 1rem;
  position: relative;
  z-index: 2;
  margin: 0;
  transition: all 0.3s ease;
`;

const CategorySection = styled(motion.div)`
  margin-bottom: 3rem;
`;

const CategoryHeader = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const CategoryIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  padding: 1rem;
  background: ${({ theme }) => theme.primary}20;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary}40;
`;

const CategoryTitle = styled.h4`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin: 0;
  font-weight: 600;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
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
      skills: [
        { name: 'HTML', icon: '🌐' },
        { name: 'CSS', icon: '🎨' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'React', icon: '⚛️' },
        { name: 'Bootstrap', icon: '🔧' }
      ]
    },
    {
      icon: <FiServer />,
      title: 'Backend',
      skills: [
        { name: 'Python', icon: '🐍' },
        { name: 'Django', icon: '🎯' },
        { name: 'Flask', icon: '🔥' },
        { name: 'SQL', icon: '💾' },
        { name: 'REST APIs', icon: '🔌' }
      ]
    },
    {
      icon: <FiDatabase />,
      title: 'Database',
      skills: [
        { name: 'MySQL', icon: '🐬' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'SQLite', icon: '💼' },
        { name: 'MongoDB', icon: '🍃' }
      ]
    },
    {
      icon: <FiGitBranch />,
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', icon: '📚' },
        { name: 'VS Code', icon: '💻' },
        { name: 'Docker', icon: '🐳' },
        { name: 'AWS', icon: '☁️' }
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
          <SkillsTitle 
            variants={itemVariants}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ⚡ Skills & Technologies
          </SkillsTitle>

          <SkillsSubtitle 
            variants={itemVariants}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            "Technology is best when it brings people together" 💻✨
          </SkillsSubtitle>

          <SkillsContainer>
            <FloatingBackground />
            
            {skillCategories.map((category, categoryIndex) => (
              <CategorySection 
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              >
                <CategoryHeader>
                  <CategoryIcon>{category.icon}</CategoryIcon>
                  <CategoryTitle>{category.title}</CategoryTitle>
                </CategoryHeader>
                
                <SkillsGrid>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skillIndex}
                      tech={skill.name}
                      initial={{ 
                        opacity: 0, 
                        scale: 0.5,
                        rotate: Math.random() * 360
                      }}
                      whileInView={{ 
                        opacity: 1, 
                        scale: 1,
                        rotate: 0
                      }}
                      transition={{ 
                        delay: (categoryIndex * 0.1) + (skillIndex * 0.1),
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <SkillIcon tech={skill.name}>
                        {skill.icon}
                      </SkillIcon>
                      <SkillName>{skill.name}</SkillName>
                    </SkillCard>
                  ))}
                </SkillsGrid>
              </CategorySection>
            ))}
          </SkillsContainer>
        </SkillsSection>
      </motion.div>
    </AboutSection>
  );
};

export default About;