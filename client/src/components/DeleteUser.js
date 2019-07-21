import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import gql from 'graphql-tag';
import { Mutation, ApolloConsumer } from 'react-apollo';
import { signOut } from './SignOutButton';

const DELETE_USER = gql`
  mutation deleteUser {
    deleteUser
  }
`;

export default ({ user, handleClose }) => {
  return (
    <ApolloConsumer>
      {client => {
        return (
          <Mutation
            mutation={DELETE_USER}
            onCompleted={deleted => {
              if (deleted) {
                handleClose();
                signOut(client);
              }
            }}
            onError={err => console.log(err)}
          >
            {(deleteUser, { loading, error }) => {
              if (loading)
                return (
                  <CircularProgress
                    disableShrink
                    size={40}
                    thickness={2}
                    variant="indeterminate"
                    style={{
                      position: 'relative',
                      left: '50%',
                      marginTop: '5rem'
                    }}
                  />
                );

              if (error) console.log(error);

              return (
                <Button
                  color="secondary"
                  variant="contained"
                  size="small"
                  onClick={deleteUser}
                  disabled={user.username === 'test'}
                >
                  DELETE USER
                </Button>
              );
            }}
          </Mutation>
        );
      }}
    </ApolloConsumer>
  );
};
