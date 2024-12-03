// src/pages/Skills.js
import React from 'react';
import styled from 'styled-components';

const SkillContainer = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;
`;

const SkillsContainer = styled.div`
  margin-bottom: 2rem;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;


function Skills() {
  return 
 <div>
  <h1>hello world</h1>
 </div>
}

export default Skills;
