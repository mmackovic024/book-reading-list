import React from 'react';
import { CircularProgress } from '@material-ui/core';
import gql from 'graphql-tag';
import { Mutation, ApolloConsumer } from 'react-apollo';
import SignInForm from './SignInForm';

const SIGN_IN = gql`
  mutation signIn($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      token
    }
  }
`;

export default ({ open, handleClose }) => {
  return (
    <ApolloConsumer>
      {client => {
        return (
          <Mutation
            mutation={SIGN_IN}
            onCompleted={data => {
              handleClose();
              localStorage.setItem('x-token', data.signIn.token);
              client.resetStore();
            }}
            onError={err => {}}
          >
            {(signIn, { loading, error }) => {
              if (loading)
                return (
                  <CircularProgress
                    disableShrink
                    size={30}
                    thickness={2}
                    variant="indeterminate"
                    style={{
                      position: 'absolute',
                      left: '50%',
                      marginTop: '5rem'
                    }}
                  />
                );

              return (
                <SignInForm
                  open={open}
                  handleClose={handleClose}
                  signIn={signIn}
                  error={error}
                />
              );
            }}
          </Mutation>
        );
      }}
    </ApolloConsumer>
  );
};
