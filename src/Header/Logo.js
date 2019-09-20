import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const StaticPart = styled.span`
  font-size: 32px;
  color: ${(p) => p.theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
`;

const DynamicPart = styled.span`
  font-size: 32px;
  color: ${(p) => p.theme.colors.secondary};
`;

const LogoWrapper = styled.div`
  display: inline-flex;
`;

const Logo = ({ currentPage }) => {
  return (
    <LogoWrapper>
      <Link to="/">
        <StaticPart>Geo</StaticPart>
      </Link>
      <Fade top>
        <DynamicPart>{currentPage}</DynamicPart>
      </Fade>
    </LogoWrapper>
  );
};

export default Logo;
