import React from 'react';
import styled from 'styled-components';
import Container from '../misc/Container';
import MainMenu from '../MainMenu/MainMenu';
import { Fade } from 'react-reveal';

const MainPage = () => {
  return (
    <Fade>
      <Container>
        <MainMenu></MainMenu>
      </Container>
    </Fade>
  );
};

export default MainPage;
