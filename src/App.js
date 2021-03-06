import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import { theme, darkTheme } from './misc/theme';
import { GlobalStyle } from './misc/GlobalStyle';
import {
  AllPage,
  CountryDetailPage,
  FavouritesPage,
  MainPage,
  SearchPage,
} from './pages';
import { Header } from './Header';
import LanguageDetailPage from './pages/LanguageDetailPage';
import ContinentDetailPage from './pages/ContinentDetailPage';

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
            <Route
              path="/all"
              render={() => <AllPage currentTheme={currentTheme} />}
            />
            <Route path="/search" component={SearchPage} />
            <Route path="/country/:code" component={CountryDetailPage} />
            <Route path="/language/:code" component={LanguageDetailPage} />
            <Route path="/continent/:code" component={ContinentDetailPage} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
};
