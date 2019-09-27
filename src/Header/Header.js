import React from 'react';
import styled from 'styled-components';
import Container from '../misc/Container';
import Logo from './Logo';
import { withRouter, Link } from 'react-router-dom';
import { pathnameParser } from '../misc/pathnameParser';
import Navigation from './Navigation';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const HeaderComponent = ({
  location: { pathname },
  toggleTheme,
  currentTheme,
}) => {
  const [sectionName, setSectionName] = React.useState('');
  const [prepare, setPrepare] = React.useState(true);
  React.useEffect(() => {
    setPrepare(false);
    const timer = setTimeout(() => {
      setSectionName(pathnameParser(pathname));
      setPrepare(true);
      // компонент Logo узнает, что сейчас обновится раздел, прячет его, чтобы анимация не глитчилась, потоиу что в другом случае видно как меняется имя раздела, а потом уже анимация срабатывает, что выглядит неряшливо

      return () => clearTimeout(timer);
    }, 100);
  }, [pathname]);

  return (
    <header>
      <Container>
        <HeaderWrapper>
          <Logo currentPage={sectionName} prepare={prepare} />
          <Navigation toggleTheme={toggleTheme} currentTheme={currentTheme} />
        </HeaderWrapper>
      </Container>
    </header>
  );
};

export const Header = withRouter(HeaderComponent);
