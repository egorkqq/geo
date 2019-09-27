import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../misc/Container';
import ExtLink from '../misc/Svg/ExtLink';
import { Wrapper, TitleWrapper, Title, StyledLink } from './styled';

const getBg = (code) => {
  const res =
    code === 'AF'
      ? '/assets/africa-map.svg'
      : code === 'AN'
      ? '/assets/arctic.svg'
      : code === 'SA'
      ? '/assets/south-america.svg'
      : code === 'NA'
      ? '/assets/north-america.svg'
      : code === 'AS'
      ? '/assets/asia.svg'
      : code === 'OC'
      ? '/assets/australia.svg'
      : '/assets/europe.svg';
  return res;
};

const CountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  max-height: 60vh;
  z-index: 100;
  @media (max-width: 1240px) {
    flex-direction: row;
    max-height: none;
  }
`;
const CountriesTitle = styled.div`
  text-align: center;
  font-size: 22px;
  margin-bottom: 24px;
`;
const Country = styled.div`
  padding: 10px;
  border-radius: 3px;
  border: 1px solid ${(p) => p.theme.colors.main};
  background: ${(p) => p.theme.colors.background};
  width: 160px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: ${(p) => p.theme.transition};
  color: ${(p) => p.theme.colors.main};
  &:hover {
    transform: translateY(-5px);
    border: 1px solid ${(p) => p.theme.colors.orange};
    color: ${(p) => p.theme.colors.orange};
  }
`;

const CountryLink = styled(Link)`
  margin: 10px;
`;

const Background = styled.object`
  position: absolute;
  height: 160vh;
  width: 100%;
  bottom: ${(p) => (p.code === 'AN' ? '-120%' : '-60%')};
  left: -40%;
  z-index: -200;

  svg {
    fill: ${(p) => p.theme.colors.main};
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`;

const ContinentView = ({ code, name, countries }) => {
  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <Title>{name}</Title>
        </TitleWrapper>
        <CountriesTitle>countries list:</CountriesTitle>
        <CountriesContainer>
          {countries.map((country) => (
            <CountryLink key={country.code} to={`/country/${country.code}`}>
              <Country>{country.name}</Country>
            </CountryLink>
          ))}
        </CountriesContainer>
        <LinksWrapper>
          <StyledLink>Add to favorites</StyledLink>
          <StyledLink>
            More Info on Wiki
            <ExtLink />
          </StyledLink>
        </LinksWrapper>
        <Background
          type="image/svg+xml"
          data={getBg(code)}
          width="200"
          height="200"
          code={code}
        >
          Your browser does not support SVG
        </Background>
      </Wrapper>
    </Container>
  );
};

export default ContinentView;
