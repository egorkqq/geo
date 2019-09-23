import React from 'react';
import { Fade } from 'react-reveal';
import Container from '../misc/Container';
import Search from '../Search/Search';

const SearchPage = () => {
  return (
    <Fade bottom>
      <Container>
        <Search />
      </Container>
    </Fade>
  );
};

export default SearchPage;
