// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '@fontsource/poppins'; // Importing Google Font
import logo from '../assets/logo.png';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.background};
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: space-between; /* Added to position logo on the left and items on the right */

  &:hover {
    background-color: ${({ theme }) => theme.backgroundHover};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 120px; /* Adjust the size as necessary */
  margin-right: 1rem;

`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end; /* Align nav items to the right */
  align-items: center;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1.5rem;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    left: 0;
    bottom: -5px;
    transition: width 0.3s ease;
    width: 0%;
  }

  &:hover::after {
    width: 100%;
  }
`;

function Navbar() {
  return (
    <Nav>
      {/* Logo on the left */}
      <LogoContainer>
        <Logo src={logo} alt="Logo" />

      </LogoContainer>

      {/* Navigation items on the right */}
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/#about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/#education">Educational Qualifications</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/#experience">Experience</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/#papers-and-projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/#contact">Contact</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;
