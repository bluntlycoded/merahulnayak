// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faBehance, faDribbble } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.footerBackground};
  color: ${({ theme }) => theme.footerText};
  padding: 1.5rem 0;
  text-align: center;
`;

const SocialIcons = styled.div`
  margin: 1rem 0;

  a {
    color: ${({ theme }) => theme.footerText};
    margin: 0 0.5rem;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialIcons>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faBehance} />
        </a>
        <a href="https://www.dribbble.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDribbble} />
        </a>
      </SocialIcons>
      <FooterText>&copy; 2024 Rahul Nayak. All Rights Reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
