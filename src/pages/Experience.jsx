// src/pages/Contact.js
import React from 'react';
import styled from 'styled-components';


const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;
`;

const ExpContainer = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
`;

const ExperienceContainer = styled.div`
  margin-bottom: 2rem;
`;

const ExperienceItem = styled.div`
  margin-bottom: 1.5rem;
`;

const ExperienceTitle = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 0.5rem;
`;

function Experience() {
  return <ExpContainer>
          <ExperienceContainer>
        <SectionTitle>Experience</SectionTitle>
        <ExperienceItem>
          <ExperienceTitle>Student at VIT AP University</ExperienceTitle>
        </ExperienceItem>
        <ExperienceItem>
          <ExperienceTitle>Prompt Engineer (Freelance)</ExperienceTitle>
        </ExperienceItem>
        <ExperienceItem>
          <ExperienceTitle>Chalbo India Pvt Ltd</ExperienceTitle>
        </ExperienceItem>
        <ExperienceItem>
          <ExperienceTitle>Computer Society Of India VIT-AP Chapter</ExperienceTitle>
        </ExperienceItem>
        <ExperienceItem>
          <ExperienceTitle>Innovators Quest VIT-AP</ExperienceTitle>
        </ExperienceItem>
        <ExperienceItem>
          <ExperienceTitle>Machine Learning Club VIT-AP</ExperienceTitle>
        </ExperienceItem>
      </ExperienceContainer>
  </ExpContainer>;
}

export default Experience;
