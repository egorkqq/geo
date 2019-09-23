import React from 'react';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import Container from '../misc/Container';
import Search from '../Search/Search';

const SearchPageWrapper = styled.section`
  overflow-y: hidden;
  min-height: 80vh;
`;

const SearchPage = () => {
  return (
    <SearchPageWrapper>
      <Fade bottom big>
        <Container>
          <Search />
        </Container>
      </Fade>
    </SearchPageWrapper>
  );
};

export default SearchPage;
