import React from 'react';
import styled from 'styled-components';
import Container from '../misc/Container';
import Logo from './Logo';
import { withRouter, Link } from 'react-router-dom';
import { pathnameParser } from '../misc/pathnameParser';
import Navigation from './Navigation';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const HeaderComponent = ({
  location: { pathname },
  toggleTheme,
  currentTheme,
}) => {
  return (
    <header>
      <Container>
        <HeaderWrapper>
          <Logo currentPage={pathnameParser(pathname)} />
          <Navigation toggleTheme={toggleTheme} currentTheme={currentTheme} />
        </HeaderWrapper>
      </Container>
    </header>
  );
};

export const Header = withRouter(HeaderComponent);
