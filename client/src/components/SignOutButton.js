import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import { Button } from '@material-ui/core';

const signOut = client => {
  localStorage.removeItem('x-token');
  client.resetStore();
};

export { signOut };

export default () => {
  return (
    <ApolloConsumer>
      {client => (
        <Button
          color="inherit"
          variant="outlined"
          style={{ marginLeft: 'auto' }}
          onClick={() => signOut(client)}
        >
          Sign out
        </Button>
      )}
    </ApolloConsumer>
  );
};
