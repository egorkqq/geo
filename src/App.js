import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import { theme, darkTheme } from './misc/theme';
import { GlobalStyle } from './misc/GlobalStyle';
import {
  AllPage,
  DetailPage,
  FavouritesPage,
  MainPage,
  SearchPage,
} from './pages';
import { Header } from './Header';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
});
export const App = () => {
  const [currentTheme, setCurrentTheme] = React.useState(theme);
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === theme ? darkTheme : theme);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={currentTheme}>
        <BrowserRouter>
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} currentTheme={currentTheme} />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/favourites" component={FavouritesPage} />
            <Route path="/all" component={AllPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/detail" component={DetailPage} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
};
