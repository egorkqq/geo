import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 50px 0;
`;

export const Text = styled.div`
  font-size: 24px;
  margin: 50px 0;
  color: ${(p) => p.theme.colors.main};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export const Title = styled.h1`
  color: ${(p) => p.theme.colors.main};
  font-size: 72px;
  @media (max-width: 992px) {
    font-size: 46px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const InformationCell = styled.div`
  display: flex;
  margin-right: 24px;
  margin-bottom: 8px;
  &:last-child {
    margin-right: 0;
  }
`;

export const InformationType = styled.div`
  color: ${(p) => p.theme.colors.main};
  margin-right: 8px;
`;

export const InformationContent = styled.div`
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
