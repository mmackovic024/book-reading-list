import React from 'react';
import { Container } from '@material-ui/core';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import Navbar from './components/Navbar';
import Data from './components/Data';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  if (token) {
    headers = { ...headers, 'x-token': token };
  }

  return { headers };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default () => {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Container style={{ paddingTop: '5rem' }}>
        <Data />
      </Container>
    </ApolloProvider>
  );
};
