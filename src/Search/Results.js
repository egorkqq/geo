import React from 'react';
import styled from 'styled-components';
import Pin from './Pin';

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`;

const CategoryItems = styled.div`
  display: flex;
  max-width: 100%;
  overflow-x: auto;
`;
const CategoryName = styled.div`
  font-size: 24px;
  margin: 20px 0;
  color: ${(p) => p.theme.colors.main};
`;

const Results = ({
  allItems: { languages, countries, continents },
  searchTerm,
}) => {
  const filterItems = React.useCallback(
    (items) =>
      items.filter((item) => {
        if (item.name === null) {
          return false;
        }

        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      }),
    [searchTerm],
  );
  console.log(searchTerm);
  if (!searchTerm.length) {
    return (
      <ResultsWrapper>
        <CategoryName>Enter something</CategoryName>
      </ResultsWrapper>
    );
  }

  // prettier-ignore
  if (!filterItems(countries).length && !filterItems(languages).length && !filterItems(continents).length) {
    return (
      <ResultsWrapper>
        <CategoryName>No results</CategoryName>
      </ResultsWrapper>
    );
  }

  return (
    <ResultsWrapper>
      {Boolean(filterItems(countries).length) && (
        <CategoryName>Countries</CategoryName>
      )}
      <CategoryItems>
        {filterItems(countries)
          .slice(0, 5)
          .map((item) => (
            <Pin
              key={item.code}
              title={item.name}
              code={item.code}
              type={'count'}
            />
          ))}
      </CategoryItems>
      {Boolean(filterItems(languages).length) && (
        <CategoryName>Languages</CategoryName>
      )}
      <CategoryItems>
        {filterItems(languages)
          .slice(0, 5)
          .map((item) => (
            <Pin
              key={item.code}
              title={item.name}
              code={item.code}
              type={'lang'}
            />
          ))}
      </CategoryItems>
      {Boolean(filterItems(continents).length) && (
        <CategoryName>Continents</CategoryName>
      )}
      <CategoryItems>
        {filterItems(continents)
          .slice(0, 5)
          .map((item) => (
            <Pin
              key={item.code}
              title={item.name}
              code={item.code}
              type={'cont'}
            />
          ))}
      </CategoryItems>
    </ResultsWrapper>
  );
};

export default Results;
