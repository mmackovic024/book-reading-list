import React from 'react';
import { CircularProgress } from '@material-ui/core';
import gql from 'graphql-tag';
import { Mutation, ApolloConsumer } from 'react-apollo';
import SignUpForm from './SignUpForm';

const SIGN_IN = gql`
  mutation signUp($username: String!, $password: String!, $email: String) {
    signUp(
      userInput: { username: $username, password: $password, email: $email }
    ) {
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
              localStorage.setItem('x-token', data.signUp.token);
              client.resetStore();
            }}
            onError={err => {}}
          >
            {(signUp, { loading, error }) => {
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

              return (
                <SignUpForm
                  open={open}
                  handleClose={handleClose}
                  signUp={signUp}
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
