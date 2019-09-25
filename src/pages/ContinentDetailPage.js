import React from 'react';
import { Fade } from 'react-reveal';
import Continent from '../Detail/Continent';

const ContinentDetailPage = ({ match }) => {
  return (
    <Fade>
      <Continent code={match.params.code} />
    </Fade>
  );
};

export default ContinentDetailPage;
