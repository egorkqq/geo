import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../misc/theme';
import FavsIcon from '../misc/Svg/Favourites';
import MoonIcon from '../misc/Svg/Moon';
import SunIcon from '../misc/Svg/Sun';

const NavigationWrpper = styled.div`
  display: flex;
`;
const IconWrapper = styled.div`
  height: 32px;
  width: 32px;
  margin-left: 4px;
  cursor: pointer;
  & svg {
    width: 100%;
    height: 100%;
    fill: ${(p) => p.theme.colors.secondary};
  }
`;

const Navigation = ({ currentTheme, toggleTheme }) => {
  return (
    <NavigationWrpper>
      <IconWrapper onClick={toggleTheme}>
        {currentTheme === theme ? <MoonIcon /> : <SunIcon />}
      </IconWrapper>
      <IconWrapper>
        <Link to="/favourites">
          <FavsIcon />
        </Link>
      </IconWrapper>
    </NavigationWrpper>
  );
};

export default Navigation;
