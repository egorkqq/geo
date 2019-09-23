import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const StaticPart = styled.span`
  font-size: 32px;
  color: ${(p) => p.theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  transition: ${(p) => p.theme.transition};
`;

const DynamicPart = styled.span`
  font-size: 32px;
  color: ${(p) => p.theme.colors.orange};
`;

const LogoWrapper = styled.div`
  display: inline-flex;
`;

const Logo = ({ currentPage, prepare }) => {
  const [animation, setAnimation] = React.useState(true);
  React.useEffect(() => {
    setAnimation(false);
    setTimeout(() => setAnimation(true), 100);
  }, [currentPage]);

  return (
    <LogoWrapper>
      <Link to="/">
        <StaticPart>Geo</StaticPart>
      </Link>
      {prepare && (
        <Fade top>
          <DynamicPart>{currentPage}</DynamicPart>
        </Fade>
      )}
    </LogoWrapper>
  );
};

export default Logo;
