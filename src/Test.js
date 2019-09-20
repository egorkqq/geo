import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { SpringSpinner } from 'react-epic-spinners';

const Wrapper = styled.div`
  color: red;
`;

const COUNTRIES_LIST = gql`
  {
    countries {
      code
      name
      currency
    }
  }
`;

const Test = () => {
  const [toggle, setToggle] = React.useState(true);
  const { loading, error, data } = useQuery(COUNTRIES_LIST);

  if (loading) return <SpringSpinner color={'black'} />;
  if (error) return <p>ErrorRORrororo </p>;

  const renderCountries = () =>
    data.countries.map(({ code, currency, name }) => (
      <div key={code}>
        <h3>
          {name} ({code})
        </h3>

        <p>Currency: {currency}</p>
      </div>
    ));

  return <Fade cascade>{renderCountries()}</Fade>;
};

export default Test;
