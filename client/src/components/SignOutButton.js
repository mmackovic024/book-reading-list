import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import { Button } from '@material-ui/core';

export default () => {
  const SignOut = client => {
    localStorage.removeItem('x-token');
    client.resetStore();
  };

  return (
    <ApolloConsumer>
      {client => (
        <Button
          color="inherit"
          variant="outlined"
          style={{ marginLeft: 'auto' }}
          onClick={() => SignOut(client)}
        >
          Sign out
        </Button>
      )}
    </ApolloConsumer>
  );
};
