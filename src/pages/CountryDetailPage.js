import React from 'react';
import { Fade } from 'react-reveal';
import Country from '../Detail/Country';

const CountryDetailPage = ({ match }) => {
  return (
    <Fade>
      <Country code={match.params.code} />
    </Fade>
  );
};

export default CountryDetailPage;
