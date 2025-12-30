import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';

const ContactSection = styled.section`
  padding: 100px 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  background: ${({ theme }) => theme.secondary}30;

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

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.primary}20;
  height: fit-content;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const ContactInfoText = styled.p`
  color: ${({ theme }) => theme.text}CC;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: ${({ theme }) => theme.secondary}30;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary}10;
    transform: translateX(5px);
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ContactDetails = styled.div``;

const ContactLabel = styled.h5`
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

const ContactValue = styled.p`
  color: ${({ theme }) => theme.text}99;
  font-size: 0.95rem;
  word-break: break-all;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.secondary};
  border: 2px solid ${({ theme }) => theme.primary}40;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const ContactForm = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.primary}20;
`;

const FormTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const FormText = styled.p`
  color: ${({ theme }) => theme.text}CC;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  background: ${({ theme }) => theme.secondary}30;
  border: 2px solid ${({ theme }) => theme.primary}20;
  border-radius: 10px;
  padding: 1rem;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.secondary}50;
  }

  &::placeholder {
    color: ${({ theme }) => theme.text}60;
  }
`;

const FormTextarea = styled.textarea`
  background: ${({ theme }) => theme.secondary}30;
  border: 2px solid ${({ theme }) => theme.primary}20;
  border-radius: 10px;
  padding: 1rem;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.secondary}50;
  }

  &::placeholder {
    color: ${({ theme }) => theme.text}60;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px ${({ theme }) => theme.primary}40;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: ${({ theme }) => theme.accent}20;
  color: ${({ theme }) => theme.accent};
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  margin-top: 1rem;
  border: 1px solid ${({ theme }) => theme.accent}40;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactItems = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'dshah1359@gmail.com',
      href: 'mailto:dshah1359@gmail.com'
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: '1/b 605 Indrsprastha, Jitendra Road, Malad - East, Mumbai - 400097'
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: 'github.com/dshah45',
      href: 'https://github.com/dshah45'
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
    <ContactSection id="contact">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionTitle variants={itemVariants}>
          Get In Touch
        </SectionTitle>

        <SectionSubtitle variants={itemVariants}>
          I'd love to hear from you. Send me a message and I'll respond as soon as possible.
        </SectionSubtitle>

        <ContactContainer>
          <ContactInfo variants={itemVariants}>
            <ContactInfoTitle>Contact Information</ContactInfoTitle>
            <ContactInfoText>
              Feel free to reach out to me for any inquiries, collaboration opportunities, 
              or just to say hello!
            </ContactInfoText>

            {contactItems.map((item, index) => (
              <ContactItem
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                as={item.href ? 'a' : 'div'}
                href={item.href}
                target={item.href ? '_blank' : undefined}
                rel={item.href ? 'noopener noreferrer' : undefined}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <ContactIcon>
                  {item.icon}
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel>{item.label}</ContactLabel>
                  <ContactValue>{item.value}</ContactValue>
                </ContactDetails>
              </ContactItem>
            ))}

            <SocialLinks>
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
          </ContactInfo>

          <ContactForm variants={itemVariants}>
            <FormTitle>Send me a message</FormTitle>
            <FormText>
              Have a project in mind? Let's discuss how we can work together.
            </FormText>

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  required
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </SubmitButton>

              {submitted && (
                <SuccessMessage
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you for your message! I'll get back to you soon.
                </SuccessMessage>
              )}
            </Form>
          </ContactForm>
        </ContactContainer>
      </motion.div>
    </ContactSection>
  );
};

export default Contact;