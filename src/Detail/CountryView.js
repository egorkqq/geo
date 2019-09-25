import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../misc/Container';
import ExtLink from '../misc/Svg/ExtLink';
import {
  Wrapper,
  TitleWrapper,
  Title,
  InfoWrapper,
  InformationCell,
  InformationType,
  InformationContent,
} from './styled';

const Emodji = styled.span`
  margin-left: 20px;
  font-size: 64px;
  @media (max-width: 992px) {
    font-size: 36px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px) {
    flex-direction: column;
  }
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
  display: flex;
  align-items: center;
  white-space: nowrap;
  &:hover {
    color: ${(p) => p.theme.colors.secondary};
    & svg {
      fill: ${(p) => p.theme.colors.secondary};
    }
  }
  & svg {
    height: 22px;
    width: 22px;
    fill: ${(p) => p.theme.colors.main};
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
            <StyledLink
              target="_blank"
              href={`https://en.wikipedia.org/wiki/${name}`}
            >
              <span>See more info in Wiki</span>
              <ExtLink />
            </StyledLink>
            <StyledLink
              target="_blank"
              href={`https://www.google.ru/search?q=${name}`}
            >
              <span>...or google it</span>
              <ExtLink />
            </StyledLink>
          </Links>
        </LinksWrapper>
      </Wrapper>
    </Container>
  );
};

export default CountryView;
