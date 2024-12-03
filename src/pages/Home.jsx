// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import profilePhoto from '../assets/profilePhoto.jpg';
import instituteLogo from '../assets/formlogo (1).png';
import cloudOverlay from '../assets/cloudOverlay.jpg';
import '../styles/Gls.css'
import resume from '../assets/resume/resume.pdf';

// Project icons
import project3Img from '../assets/projects/resume-builder.png';
import project1Img from '../assets/projects/password-generator.jpeg';
import project2Img from '../assets/projects/expense-tracker.jpeg';

// Skill icons
import figmaIcon from '../assets/Figma.png';
import nodeIcon from '../assets/node.png';
import fbIcon from '../assets/firebase.png';
import reactIcon from '../assets/react.png';
import pythonIcon from '../assets/python-logo-only.png';

// Company Logos
import chalboLogo from '../assets/chalbo.webp';
import tnnLogo from '../assets/tnn.png';
import ijfmrLogo from '../assets/ijfmr.png';
import Footer from '../components/Footer';
import Contact from './Contact';

// Styled-components
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-family: 'Roboto', sans-serif;
`;

const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const IntroText = styled.div`
  max-width: 60%;
`;

const FullName = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
  font-family: "Yatra One", system-ui;

`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledButton = styled.a`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const PhotoContainer = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
`;



const Section = styled.section`
  margin: 3rem 0;
  padding: 2rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
`;

const ExperienceCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
`;

const ExperienceDetails = styled.div`
  flex: 1;
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.primary};
  font-family:'Yatra One';
`;

const CompanyDetails = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const CompanyLogo = styled.img`
  width: 80px;
  border-radius: 10px;
  margin-left: 1rem;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 1.2rem;
  padding: 2px
`;

const SkillIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

const ProjectCard = styled.div`
  flex: 1 1 30%;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.primary};
  font-family: 'Yatra One';
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const ProjectLink = styled.a`
  font-size: 1rem;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeaderSection>
        <IntroText>
          <FullName>Rahul Nayak</FullName>
<div id='about'></div>
          <AboutText>
            I'm a Web Developer & Cyber Security Enthusiast who is passionate about technology and language
            modeling, proficient in multiple programming languages and web
            development frameworks.
          </AboutText>
          <br/>
          <SkillGrid>
          <SkillIcon src={figmaIcon} alt="HTML" />
          <SkillIcon src={nodeIcon} alt="CSS" />
          <SkillIcon src={fbIcon} alt="JavaScript" />
          <SkillIcon src={reactIcon} alt="React" />
          <SkillIcon src={pythonIcon} alt="Python" />
        </SkillGrid>
        <br/>
          <ButtonContainer>
            <StyledButton href={resume} download>
              Download Resume
            </StyledButton>
            <StyledButton href="#contact">Contact Me</StyledButton>
          </ButtonContainer>
        </IntroText>
        <PhotoContainer>
        <Photo src={profilePhoto} alt="Profile" />
        </PhotoContainer>
        
      </HeaderSection>
      <Section id='education'>
        <SectionTitle>Educational Details</SectionTitle>
        <ExperienceCard>
          <ExperienceDetails>
            <JobTitle>Integrated M.Tech(CSE)</JobTitle>
            <CompanyDetails>2022-2027 </CompanyDetails>
            <CompanyDetails>VIT-AP University, Andhra Pradesh,India</CompanyDetails>
          </ExperienceDetails>
          <CompanyLogo src={instituteLogo} alt="Company Logo" />
        </ExperienceCard>
      </Section>
<div id='experience'></div>
      <Section>
        <SectionTitle>Experience</SectionTitle>
        <ExperienceCard>
          <ExperienceDetails>
            <JobTitle>President</JobTitle>
            <CompanyDetails>Team Next Nexus VIT-AP | July 2024 - Present</CompanyDetails>
          </ExperienceDetails>
          <CompanyLogo src={tnnLogo} alt="Company Logo" />
        </ExperienceCard>

        <ExperienceCard>
          <ExperienceDetails>
            <JobTitle>Full Stack Web Developer Intern</JobTitle>
            <CompanyDetails>Chalbo India Pvt Ltd | May 2020 - Dec 2021</CompanyDetails>
          </ExperienceDetails>
          <CompanyLogo src={chalboLogo} alt="Company Logo" />
        </ExperienceCard>
      </Section>

      <Section id='projects-papers'>
        <SectionTitle>Research Papers</SectionTitle>
        <ExperienceCard>
          <ExperienceDetails>
            <JobTitle>Home Automation System Using Google Assistant</JobTitle>
            <CompanyDetails>International Journal For Multidisciplinary Research · Apr 15, 2024</CompanyDetails>
            <CompanyDetails>Authors: <a href='https://orcid.org/0009-0001-8318-4639'>Rahul Nayak<sup>1</sup></a> </CompanyDetails>
          <CompanyDetails><a href='https://doi.org/10.36948/ijfmr.2024.v06i02.17323'>Paper Link</a></CompanyDetails>
          </ExperienceDetails>
          <CompanyLogo src={ijfmrLogo} alt="Company Logo" />
        </ExperienceCard>
      </Section>

      <Section>
        <SectionTitle>Projects</SectionTitle>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <ProjectCard>
            <ProjectImage src={project1Img} alt="Project 1" />
            <ProjectContent>
              <ProjectTitle>Password Generator</ProjectTitle>
              <ProjectDescription>
              A free online Password Generator tool made using react js 
              </ProjectDescription>
              <ProjectLink href="#">View Project</ProjectLink>
            </ProjectContent>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage src={project2Img} alt="Project 2" />
            <ProjectContent>
              <ProjectTitle>Expense Tracker</ProjectTitle>
              <ProjectDescription>
              A free online Expense Tracker tool made using react js and bootstrap              </ProjectDescription>
              <ProjectLink href="#">View Project</ProjectLink>
            </ProjectContent>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage src={project3Img} alt="Project 3" />
            <ProjectContent>
              <ProjectTitle>Resume Builder</ProjectTitle>
              <ProjectDescription>
                A free online Resume Builder tool made using react js 
              </ProjectDescription>
              <ProjectLink href="#">View Project</ProjectLink>
            </ProjectContent>
          </ProjectCard>
        </div>
      </Section>
      <div id="contact"></div>
      <Contact/>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
