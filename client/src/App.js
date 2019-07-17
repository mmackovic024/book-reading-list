import React from 'react';
import { Container, CircularProgress } from '@material-ui/core';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Navbar from './components/Navbar';
import Data from './components/Data';
import Warning from './components/Warning';
import { signOut } from './components/SignOutButton';

const GET_ME = gql`
  {
    Me {
      id
      username
      email
      bookCount
      books {
        title
        author
        rating
        readCount
      }
    }
  }
`;

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('x-token');

  if (token) {
    headers = { ...headers, Authorization: 'Bearer ' + token };
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
      <Query
        query={GET_ME}
        onError={err => {
          if (err.networkError.statusCode === 400) {
            signOut(client);
          }
        }}
      >
        {({ loading, error, data }) => {
          if (loading)
            return (
              <CircularProgress
                disableShrink
                size={50}
                thickness={3}
                variant="indeterminate"
                style={{ position: 'relative', left: '50%', marginTop: '5rem' }}
              />
            );
          if (error) {
            return <Warning message={error.message} />;
          }

          return (
            <>
              <Navbar user={data.Me} />
              <Container style={{ paddingTop: '8rem' }}>
                <Data user={data.Me} />
              </Container>
            </>
          );
        }}
      </Query>
    </ApolloProvider>
  );
};
