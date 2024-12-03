// src/components/GoUpButton.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #BB86FC;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 0.5s;
  z-index: 1000;
  font-size: 1rem;
  text-align: center;
  font-weight:600;
  font-size: 2rrem;

  &:hover {
    background-color: #00b685;
  }
`;


const GoUpButton = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button visible={visible} onClick={scrollToTop}>
      <strong>^</strong>
    </Button>
  );
};

export default GoUpButton;
