// src/components/Preloader.js
import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.ico'; // Update with your logo path

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PreloaderContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack logo and text vertically */
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212;
  font-family:'Yatra One';
  color:#bb86fc;
  font-size: 3rem;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Logo = styled.img`
  width: 200px; /* Adjust size to make it large */
  margin-bottom: 20px; /* Space between logo and text */
`;

const PreloaderText = styled.div`
  font-weight: bold;
`;

const Preloader = ({ isExiting }) => {
  return (
    <PreloaderContainer>
      <Logo src={logo} alt="Logo" />
      <PreloaderText>|| अंतः अस्ति प्रारंभ ||</PreloaderText>
    </PreloaderContainer>
  );
};

export default Preloader;
