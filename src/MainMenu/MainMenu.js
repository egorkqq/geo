import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import Card from './Card';
import { cards } from './cards';

const MainMenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 100px;
`;

const MainMenu = () => {
  return (
    <Fade top>
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
    </Fade>
  );
};

export default MainMenu;
