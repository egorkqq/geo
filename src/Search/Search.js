import React from 'react';
import styled from 'styled-components';
import { LoopingRhombusesSpinner } from 'react-epic-spinners';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { MAIN_ORANGE as orangeColor } from '../misc/theme';
import Input from './Input';
import Results from './Results';
import { useSessionStorage } from '../misc/useSessionStorage';

const SearchWrapper = styled.div`
  margin-top: 100px;
`;
const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 50px 0;
`;
const SearchText = styled.div`
  font-size: 24px;
  margin: 50px 0;
  color: ${(p) => p.theme.colors.main};
`;

const getCountries = gql`
  {
    countries {
      code
      name
    }
    continents {
      code
      name
    }
    languages {
      code
      name
    }
  }
`;

const Search = () => {
  const { loading, error, data } = useQuery(getCountries);
  const [searchTerm, setSearchTerm] = useSessionStorage('searchTerm', '');

  return (
    <SearchWrapper>
      <Input
        disabled={Boolean(loading || error)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {loading && (
        <Loading>
          <SearchText>Loading...</SearchText>
          <LoopingRhombusesSpinner size={52} color={orangeColor} />
        </Loading>
      )}
      {error && (
        <Loading>
          <SearchText>Server error, try later :(</SearchText>
        </Loading>
      )}
      {data && Boolean(searchTerm.length) && (
        <Results allItems={data} searchTerm={searchTerm} />
      )}
      {Boolean(!searchTerm.length) && (
        <Loading>
          <SearchText>
            Type something and we will find it for you{' '}
            <span aria-label="LOVE" role="img">
              ❤️
            </span>
          </SearchText>
        </Loading>
      )}
    </SearchWrapper>
  );
};

export default Search;
