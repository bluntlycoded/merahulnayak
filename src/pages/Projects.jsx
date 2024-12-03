// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.secondary};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const ProjectLink = styled.a`
  margin-top: 1rem;
  display: inline-block;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

function Projects() {
  return (
    <ProjectsContainer>
      <SectionTitle>My Projects</SectionTitle>
      <ProjectsGrid>
        <ProjectCard>
          <ProjectTitle>Project 1</ProjectTitle>
          <ProjectDescription>
            A brief description of what this project is about.
          </ProjectDescription>
          <ProjectLink href="https://github.com/username/project1" target="_blank">
            View Project
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Project 2</ProjectTitle>
          <ProjectDescription>
            A brief description of what this project is about.
          </ProjectDescription>
          <ProjectLink href="https://github.com/username/project2" target="_blank">
            View Project
          </ProjectLink>
        </ProjectCard>
        {/* Add more ProjectCards as needed */}
      </ProjectsGrid>
    </ProjectsContainer>
  );
}

export default Projects;
