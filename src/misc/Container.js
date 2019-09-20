import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  @media (min-width: ${(p) => p.theme.breakpoints.sm}px) {
    width: ${(p) => p.theme.breakpoints.sm - 32}px;
  }
  @media (min-width: ${(p) => p.theme.breakpoints.md}px) {
    width: ${(p) => p.theme.breakpoints.md - 32}px;
  }
  @media (min-width: ${(p) => p.theme.breakpoints.lg}px) {
    width: ${(p) => p.theme.breakpoints.lg - 32}px;
  }
  @media (min-width: ${(p) => p.theme.breakpoints.xl}px) {
    width: ${(p) => p.theme.breakpoints.xl - 32}px;
  }
`;

export default Container;
