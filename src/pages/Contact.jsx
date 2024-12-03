// src/pages/Contact.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faBehance, faDribbble } from '@fortawesome/free-brands-svg-icons';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Header = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.primary};
  text-align: center;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 900px;
`;

const FormContainer = styled.div`
  flex: 1;
  max-width: 600px;
  margin-right: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin-bottom: 1.5rem;
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  margin-bottom: 1.5rem;
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  resize: none;
`;

const Button = styled.button`
  padding: 0.75rem;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;
`;

const SocialMediaItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  a {
    color: ${({ theme }) => theme.text};
    margin-right: 0.75rem;
    font-size: 2rem;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  span {
    font-size: 1.1rem;
  }
`;

function Contact() {
  return (
    <ContactContainer>
      <Header>Contact Me</Header>
      <ContentContainer>
        <FormContainer>
          <Form>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" rows="5" required />
            <Button type="submit">Send Message</Button>
          </Form>
        </FormContainer>
        <SocialMediaContainer>
          <SocialMediaItem>
            <a href="https://www.linkedin.com/in/bluntlycoded" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <span>LinkedIn</span>
          </SocialMediaItem>
          <SocialMediaItem>
            <a href="https://www.github.com/bluntlycoded" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <span>GitHub</span>
          </SocialMediaItem>
          <SocialMediaItem>
            <a href="https://www.instagram.com/me.rahulnayak" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <span>Instagram</span>
          </SocialMediaItem>
          <SocialMediaItem>
            <a href="https://www.behance.net/bluntlycoded" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faBehance} />
            </a>
            <span>Behance</span>
          </SocialMediaItem>
          <SocialMediaItem>
            <a href="https://www.dribbble.com/bluntlycoded" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDribbble} />
            </a>
            <span>Dribbble</span>
          </SocialMediaItem>
        </SocialMediaContainer>
      </ContentContainer>
    </ContactContainer>
  );
}

export default Contact;
