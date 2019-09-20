import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StrongLink = styled(Link)`
  display: block;
  flex: 0 0 calc((100% - 80px) / 3);
`;

const CardWrapper = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  box-sizing: border-box;
  height: 70vh;
  padding: 20px;
  border: 3px solid ${(p) => p.theme.colors.primary};
  margin-right: 30px;
  margin-bottom: 30px;
  background: url(${(p) => p.image}) 40% 40%;
  background-size: ${(p) => p.imageSize}px;
  transition: ${(p) => p.theme.transition};
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background-size: ${(p) => p.imageSize + p.imageSize / 10}px;
    padding: 4px 20px;
  }
`;
const CardTitle = styled.h3`
  font-size: 54px;
  color: ${(p) => p.theme.colors.orange};
`;

const Card = ({ title, image, imageSize, link }) => {
  return (
    <StrongLink to={link}>
      <CardWrapper image={image} imageSize={imageSize}>
        <CardTitle>{title}</CardTitle>
      </CardWrapper>
    </StrongLink>
  );
};

export default Card;
