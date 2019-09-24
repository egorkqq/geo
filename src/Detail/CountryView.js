import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../misc/Container';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const Title = styled.h1`
  color: ${(p) => p.theme.colors.main};
  font-size: 72px;
  @media (max-width: 992px) {
    font-size: 46px;
  }
`;

const Emodji = styled.span`
  margin-left: 20px;
  font-size: 64px;
  @media (max-width: 992px) {
    font-size: 36px;
  }
`;
const Icon = styled.span`
  margin-left: 54px;
  width: 44px;
  height: 44px;
  cursor: pointer;
  @media (max-width: 992px) {
    width: 32px;
    height: 32px;
  }
  svg {
    fill: ${(p) => p.theme.colors.background};
    stroke: ${(p) => p.theme.colors.orange};
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const InformationCell = styled.div`
  display: flex;
  margin-right: 24px;
  margin-bottom: 8px;
  &:last-child {
    margin-right: 0;
  }
`;

const InformationType = styled.div`
  color: ${(p) => p.theme.colors.main};
  margin-right: 8px;
`;

const InformationContent = styled.div`
  color: #9c9c9c;
  margin-right: 4px;
  a {
    color: ${(p) => p.theme.colors.secondary};
    transition: ${(p) => p.theme.transition};
    &:hover {
      color: ${(p) => p.theme.colors.main};
    }
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;
const FlagWrapper = styled.div`
  display: flex;
  width: 200px;
  height: 150px;
  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.colors.backgroundSecondary};
  margin: 40px;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
`;

const StyledLink = styled.a`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${(p) => p.theme.colors.main};
  &:hover {
    color: ${(p) => p.theme.colors.secondary};
  }
`;

const CountryView = ({
  code,
  name,
  native,
  phone,
  continent,
  currency,
  languages,
  emoji,
}) => {
  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <Title>{name}</Title>
          <Emodji>{emoji}</Emodji>
          {/* <Icon title="Add to favorites">
            <Like />
          </Icon> */}
        </TitleWrapper>
        <InfoWrapper>
          {Boolean(languages.length) && (
            <InformationCell>
              <InformationType>
                {languages.length > 1 ? 'languages:' : 'language:'}
              </InformationType>
              {languages.map((lang, idx) => (
                <InformationContent key={lang.code}>
                  {idx > 0 && '• '}
                  <Link to={`/language/${lang.code}`}>{lang.name}</Link>
                </InformationContent>
              ))}
            </InformationCell>
          )}
          {native && (
            <InformationCell>
              <InformationType>native name:</InformationType>
              <InformationContent>{native}</InformationContent>
            </InformationCell>
          )}
          {phone && (
            <InformationCell>
              <InformationType>phone code:</InformationType>
              <InformationContent>{phone}</InformationContent>
            </InformationCell>
          )}
          {currency && (
            <InformationCell>
              <InformationType>currency:</InformationType>
              <InformationContent>{currency}</InformationContent>
            </InformationCell>
          )}
          {continent && (
            <InformationCell>
              <InformationType>continent:</InformationType>
              <InformationContent>
                <Link to={`/continent/${continent.code}`}>
                  {continent.name}
                </Link>
              </InformationContent>
            </InformationCell>
          )}
        </InfoWrapper>
        <LinksWrapper>
          <FlagWrapper>
            <img
              src={`https://lipis.github.io/flag-icon-css/flags/4x3/${code.toLowerCase()}.svg`}
              alt={code}
              title={name}
            />
          </FlagWrapper>
          <Links>
            <StyledLink>Add to favs</StyledLink>
            <StyledLink target="_blank" href={`https://en.wikipedia.org/wiki/${name}`}>
              See more info in Wiki
            </StyledLink>
            <StyledLink target="_blank" href={`https://www.google.ru/search?q=${name}`}>
              ...or google it
            </StyledLink>
          </Links>
        </LinksWrapper>
      </Wrapper>
    </Container>
  );
};

export default CountryView;
