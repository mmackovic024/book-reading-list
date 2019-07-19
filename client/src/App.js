import React, { createContext } from 'react';
import { Container, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
// import Background from './antique-black-and-white-books-33283.jpg';

export const WarningContext = createContext(null);

const GET_ME = gql`
  {
    Me {
      id
      username
      email
      bookCount
      books {
        id
        title
        author
        rating
        avgRating
        readCount
      }
    }
  }
`;

export { GET_ME };

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('x-token');

  if (token) {
    headers = { ...headers, Authentication: 'Bearer ' + token };
  }
  return { headers };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '8rem',
    [theme.breakpoints.down('sm')]: {
      margin: '2rem 0'
    }
  },
  progres: { position: 'relative', left: '50%', marginTop: '5rem' }
}));

// =================================================================
export default () => {
  const [warning, setWarning] = React.useState({ open: false, msg: '' });
  const [reload, setReload] = React.useState(true);

  const classes = useStyles();

  return (
    <ApolloProvider client={client}>
      <Query
        query={GET_ME}
        onError={err => {
          if (err.networkError.statusCode === 400) {
            signOut(client);
          }
        }}
        fetchPolicy="cache-and-network"
      >
        {({ loading, error, data }) => {
          if (loading)
            return (
              <CircularProgress
                disableShrink
                size={50}
                thickness={3}
                variant="indeterminate"
                className={classes.progres}
              />
            );

          if (error) {
            console.log('APP COMPONENT ERROR   ====  ' + error.message);
            setWarning({ open: true, msg: error.message });
          }

          return (
            <>
              <WarningContext.Provider
                value={{ warning, setWarning, reload, setReload }}
              >
                <Warning />
                <Navbar user={data.Me} />
                <Container className={classes.root}>
                  <Data user={data.Me} />
                </Container>
              </WarningContext.Provider>
            </>
          );
        }}
      </Query>
    </ApolloProvider>
  );
};
