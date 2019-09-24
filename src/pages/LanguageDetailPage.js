import React from 'react';
import { Fade } from 'react-reveal';
import Language from '../Detail/Language';

const LanguageDetailPage = ({ match }) => {
  return (
    <Fade>
      <Language code={match.params.code} />
    </Fade>
  );
};

export default LanguageDetailPage;
