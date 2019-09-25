import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { LoopingRhombusesSpinner } from 'react-epic-spinners';
import { MAIN_ORANGE as orangeColor } from '../misc/theme';
import ContinentView from './ContinentView';
import { Loading, Text } from './styled';

const Continent = ({ code }) => {
  const getContinent = gql`
  {
    continent(code: "${code}") {
      name
      countries {
        code
        name
      }
    }
  }
`;
  const { loading, error, data } = useQuery(getContinent);

  return (
    <div>
      {loading && (
        <Loading>
          <Text>Loading...</Text>
          <LoopingRhombusesSpinner size={52} color={orangeColor} />
        </Loading>
      )}
      {error && (
        <Loading>
          <Text>Server error, try later :(</Text>
        </Loading>
      )}
      {data && (
        <ContinentView
          code={code}
          name={data.continent.name}
          countries={data.continent.countries}
        />
      )}
    </div>
  );
};

export default Continent;
