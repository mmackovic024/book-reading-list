import React from 'react';
import gql from 'graphql-tag';
import { Mutation, ApolloConsumer } from 'react-apollo';
import { CircularProgress } from '@material-ui/core';
import MaterialTable from 'material-table';
import Warning from './Warning';
import { GET_ME } from '../App';

const REMOVE_BOOK = gql`
  mutation removeBookFromList($bookId: ID!) {
    removeBookFromList(bookId: $bookId)
  }
`;

// =================================================================
export default props => {
  return (
    <ApolloConsumer>
      {client => {
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

              if (error) return <Warning message={error.message} />;

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
      }}
    </ApolloConsumer>
  );
};
