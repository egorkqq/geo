import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>Initial</div>
    </ApolloProvider>
  );
};
