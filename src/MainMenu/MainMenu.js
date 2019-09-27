import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { cards } from './cards';

const MainMenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 100px;
  @media (max-width: 992px) {
    margin-top: 30px;
  }
`;

const MainMenu = () => {
  return (
    <MainMenuWrapper>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          image={card.image}
          link={card.link}
          imageSize={card.imageSize}
        />
      ))}
    </MainMenuWrapper>
  );
};

export default MainMenu;
