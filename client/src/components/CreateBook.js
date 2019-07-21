import React from 'react';
import { CircularProgress } from '@material-ui/core';
import gql from 'graphql-tag';
import { Mutation, ApolloConsumer } from 'react-apollo';
import CreateBookForm from './CreateBookForm';

const CREATE_BOOK = gql`
  mutation createBook($title: String!, $author: String!, $rating: Int!) {
    createBook(bookInput: { title: $title, author: $author, rating: $rating }) {
      id
      title
      author
      avgRating
      readCount
    }
  }
`;

export default ({ open, handleClose }) => {
  return (
    <ApolloConsumer>
      {client => {
        return (
          <Mutation
            mutation={CREATE_BOOK}
            onCompleted={handleClose}
            onError={() => {}}
          >
            {(createBook, { loading, error }) => {
              if (loading)
                return (
                  <CircularProgress
                    disableShrink
                    size={40}
                    thickness={2}
                    variant="indeterminate"
                    style={{
                      position: 'absolute',
                      left: '50%',
                      marginTop: '5rem'
                    }}
                  />
                );

              if (error) console.log(error);

              return (
                <CreateBookForm
                  open={open}
                  handleClose={handleClose}
                  createBook={createBook}
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
