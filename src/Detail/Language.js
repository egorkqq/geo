import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { LoopingRhombusesSpinner } from 'react-epic-spinners';
import { MAIN_ORANGE as orangeColor } from '../misc/theme';
import LanguageView from './LanguageView';
import { useLocalStorage } from '../misc/useLocalStorage';

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 50px 0;
`;
const Text = styled.div`
  font-size: 24px;
  margin: 50px 0;
  color: ${(p) => p.theme.colors.main};
`;

const Language = ({ code }) => {
  const getLanguage = gql`
  {
    language(code: "${code}") {
      name
      native
      code
    }
  }
`;
  const { loading, error, data } = useQuery(getLanguage);
  const [favLanguages, setFavLanguages] = useLocalStorage('favLanguages', []);
  const addToFavs = (languageCode) => {
    setFavLanguages([...favLanguages, languageCode]);
  };
  const removeFromFavs = (languageCode) => {
    const newFavLanguages = favLanguages.filter(
      (item) => item !== languageCode,
    );
    setFavLanguages(newFavLanguages);
  };
  const isFav = favLanguages.includes(code);

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
        <LanguageView
          name={data.language.name}
          native={data.language.native}
          code={code}
          removeFromFavs={removeFromFavs}
          addToFavs={addToFavs}
          isFav={isFav}
        />
      )}
    </div>
  );
};

export default Language;
