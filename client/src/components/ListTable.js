import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { CircularProgress } from '@material-ui/core';
import MaterialTable from 'material-table';
import { GET_ME } from '../App';

const REMOVE_BOOK = gql`
  mutation removeBookFromList($bookId: ID!) {
    removeBookFromList(bookId: $bookId) {
      id
      avgRating
      readCount
      users {
        id
        bookCount
        books {
          id
          title
          author
          avgRating
          readCount
        }
      }
    }
  }
`;

// =================================================================
export default props => {
  return (
    <Mutation mutation={REMOVE_BOOK}>
      {(removeBook, { loading, error }) => {
        if (loading)
          return (
            <CircularProgress
              disableShrink
              size={40}
              thickness={3}
              variant="indeterminate"
              style={{
                position: 'relative',
                left: '50%',
                marginTop: '8rem'
              }}
            />
          );

        if (error)
          console.log('LIST TABLE COMPONENT ERROR  ====  ' + error.message);

        return (
          <>
            <MaterialTable
              {...props}
              actions={[
                {
                  icon: 'delete',
                  tooltip: 'Remove book from list',
                  onClick: (event, book) => {
                    removeBook({
                      variables: { bookId: book.id },
                      refetchQueries: [{ query: GET_ME }]
                    });
                  }
                }
              ]}
            />
          </>
        );
      }}
    </Mutation>
  );
};
