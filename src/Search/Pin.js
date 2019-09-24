import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Lang from '../misc/Svg/Lang';
import Count from '../misc/Svg/Count';
import Cont from '../misc/Svg/Cont';

const StrongLink = styled(Link)`
  display: block;
  margin-right: 16px;
`;

const PinWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: 1px solid ${(p) => p.theme.colors.main};
  border-radius: 3px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;
const PinIcon = styled.div`
  height: 28px;
  width: 28px;
  margin-right: 8px;
  svg {
    width: 100%;
    height: 100%;
    fill: ${(p) => p.theme.colors.main};
  }
`;
const PinText = styled.div`
  word-wrap: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Pin = ({ title, code, type }) => {
  const renderIcon = (type) => {
    if (type === 'lang') {
      return <Lang />;
    }
    if (type === 'count') {
      return <Count />;
    }
    if (type === 'cont') {
      return <Cont />;
    }
  };
  const createLink = (type) => {
    if (type === 'lang') {
      return '/language';
    }
    if (type === 'count') {
      return '/country';
    }
    if (type === 'cont') {
      return '/continent';
    }
  };

  return (
    <StrongLink to={`${createLink(type)}/${code}`}>
      <PinWrapper>
        <PinIcon>
          {/* <img
          src={`https://www.countryflags.io/${code}/shiny/32.png`}
          alt={code}
          title={title}
        /> */}
          {renderIcon(type)}
        </PinIcon>
        <PinText>{title}</PinText>
      </PinWrapper>
    </StrongLink>
  );
};

export default React.memo(Pin);
