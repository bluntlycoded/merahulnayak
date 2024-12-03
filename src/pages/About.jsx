// src/pages/About.js
import React from 'react';
import styled from 'styled-components';

// Skill icons
import htmlIcon from '../assets/profilePhoto.jpg'; // Add your HTML icon here
import cssIcon from '../assets/profilePhoto.jpg'; // Add your CSS icon here
import jsIcon from '../assets/profilePhoto.jpg'; // Add your JavaScript icon here
import flutterIcon from '../assets/profilePhoto.jpg'; // Add your Flutter icon here
import reactIcon from '../assets/profilePhoto.jpg'; // Add your React icon here
import pythonIcon from '../assets/profilePhoto.jpg'; // Add your Python icon here
import javaIcon from '../assets/profilePhoto.jpg';  // Add your Java icon here
import mysqlIcon from '../assets/profilePhoto.jpg'; // Add your MySQL icon here


const AboutContainer = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
`;

const SkillsSection = styled.section`
  margin-top: 4rem;  // Space before the skills section
  padding: 2rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SkillsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);  // 4 columns per row
  gap: 1rem;
`;

const SkillButton = styled.a`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    transform: scale(1.05);
  }
`;

const SkillIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;


const ContactContainer = styled.div`
  margin-top: 2rem;
`;

const ContactItem = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

function About() {
  return (
    <AboutContainer>
      <SectionTitle>About Me</SectionTitle>
      <IntroText>
        Hi 👋, I'm Rahul Nayak, a prompt engineer 👨‍💻 from VIT AP University with a passion for technology and creative language modeling 💬. I'm proficient in multiple programming languages, including HTML 🌐, CSS 🎨, JavaScript 📱, Flutter 🦋, React JS 🚀, Python 🐍, Java ☕, and MySQL 💾, and I have experience with web development and machine learning frameworks like Flask ⚗️.
        <br /><br />
        I'm also a polyglot 🗣️, fluent in Hindi 🇮🇳, English 🇬🇧, and Telugu 🇮🇳. My diverse linguistic background allows me to understand and generate text in multiple languages, making me a valuable asset for projects that require multilingual capabilities.
        <br /><br />
        In my free time, I enjoy exploring the latest advancements in artificial intelligence 🤖 and natural language processing 💬. I'm always eager to learn new things and expand my knowledge base 📚.
      </IntroText>

      <SkillsSection>
    <SkillsTitle>Skills</SkillsTitle>
    <SkillsContainer>
      <SkillButton href="#html">
        <SkillIcon src={htmlIcon} alt="HTML" />
        HTML
      </SkillButton>
      <SkillButton href="#css">
        <SkillIcon src={cssIcon} alt="CSS" />
        CSS
      </SkillButton>
      <SkillButton href="#javascript">
        <SkillIcon src={jsIcon} alt="JavaScript" />
        JavaScript
      </SkillButton>
      <SkillButton href="#flutter">
        <SkillIcon src={flutterIcon} alt="Flutter" />
        Flutter
      </SkillButton>
      <SkillButton href="#react">
        <SkillIcon src={reactIcon} alt="React JS" />
        React JS
      </SkillButton>
      <SkillButton href="#python">
        <SkillIcon src={pythonIcon} alt="Python" />
        Python
      </SkillButton>
      <SkillButton href="#java">
        <SkillIcon src={javaIcon} alt="Java" />
        Java
      </SkillButton>
      <SkillButton href="#mysql">
        <SkillIcon src={mysqlIcon} alt="MySQL" />
        MySQL
      </SkillButton>
    </SkillsContainer>
  </SkillsSection>

    </AboutContainer>
  );
}

export default About;
