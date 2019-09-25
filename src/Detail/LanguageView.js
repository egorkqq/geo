import React from 'react';
import styled from 'styled-components';
import Container from '../misc/Container';
import {
  Wrapper,
  TitleWrapper,
  Title,
  InfoWrapper,
  InformationCell,
  InformationType,
  InformationContent,
  StyledLink,
} from './styled';
import Lang from '../misc/Svg/Lang';
import ExtLink from '../misc/Svg/ExtLink';

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.span`
  width: 52px;
  height: 52px;
  margin-left: 16px;
  svg {
    width: 100%;
    height: 100%;
    fill: ${(p) => p.theme.colors.main};
  }
`;

const LanguageView = ({ name, native, code }) => {
  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <Title>{name}</Title>
          <IconWrapper>
            <Lang />
          </IconWrapper>
        </TitleWrapper>
        <InfoWrapper>
          {native && (
            <InformationCell>
              <InformationType>native name:</InformationType>
              <InformationContent>{native}</InformationContent>
            </InformationCell>
          )}
        </InfoWrapper>
        <LinksWrapper>
          <StyledLink>Add to favs</StyledLink>
          <StyledLink
            target="_blank"
            href={`https://en.wikipedia.org/wiki/${name}_language`}
          >
            <span>See more info in Wiki</span>
            <ExtLink />
          </StyledLink>
          <StyledLink
            target="_blank"
            href={`https://www.google.ru/search?q=learn%20${name}`}
          >
            <span>...or google how to learn it</span>
            <ExtLink />
          </StyledLink>
        </LinksWrapper>
      </Wrapper>
    </Container>
  );
};

export default LanguageView;
