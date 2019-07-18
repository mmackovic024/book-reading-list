import React from 'react';
import { CircularProgress } from '@material-ui/core';
import gql from 'graphql-tag';
import { Mutation, ApolloConsumer } from 'react-apollo';
import EditUserForm from './EditUserForm';

const EDIT_USER = gql`
  mutation editUser($username: String!, $password: String!, $email: String) {
    editUser(
      userInput: { username: $username, password: $password, email: $email }
    ) {
      token
    }
  }
`;

export default ({ user, open, handleClose }) => {
  return (
    <ApolloConsumer>
      {client => {
        return (
          <Mutation
            mutation={EDIT_USER}
            onCompleted={data => {
              handleClose();
              localStorage.setItem('x-token', data.editUser.token);
              client.resetStore();
            }}
            onError={err => console.log(err)}
          >
            {(editUser, { loading, error }) => {
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
                <EditUserForm
                  user={user}
                  open={open}
                  handleClose={handleClose}
                  editUser={editUser}
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
