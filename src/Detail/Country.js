import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { LoopingRhombusesSpinner } from 'react-epic-spinners';
import { MAIN_ORANGE as orangeColor } from '../misc/theme';
import CountryView from './CountryView';
import { Loading, Text } from './styled';

const Country = ({ code }) => {
  const getCountry = gql`
  {
    country(code: "${code}") {
      name
      native
      phone
      continent {
        code
        name
      }
      currency
      emoji
      languages {
        code
        name
        native
      }
    }
  }
`;
  const { loading, error, data } = useQuery(getCountry);

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
        <CountryView
          name={data.country.name}
          native={data.country.native}
          phone={data.country.phone}
          continent={data.country.continent}
          currency={data.country.currency}
          emoji={data.country.emoji}
          languages={data.country.languages}
          code={code}
        />
      )}
    </div>
  );
};

export default Country;
