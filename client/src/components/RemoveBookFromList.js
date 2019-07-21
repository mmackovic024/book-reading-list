import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { CircularProgress } from '@material-ui/core';
import { GET_ME } from '../App';
import InfoSnackbar from './InfoSnackbar';

const REMOVE_BOOK = gql`
  mutation removeBookFromList($bookId: ID!) {
    removeBookFromList(bookId: $bookId) {
      id
      avgRating
      readCount
    }
  }
`;

// =================================================================
export default ({ info, setInfo }) => {
  return (
    <Mutation mutation={REMOVE_BOOK}>
      {(removeBook, { loading, error }) => {
        const handleClose = () => {
          setInfo({ open: false, msg: '', bookId: 0 });
        };

        const handleMutation = () => {
          removeBook({
            variables: { bookId: info.bookId },
            refetchQueries: [{ query: GET_ME }]
          });
        };

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

        if (error) {
          console.log('INFOSNACKBAR ERROR OBJECT ');
          console.log(error);
        }

        return (
          <InfoSnackbar
            info={info}
            handleClose={handleClose}
            handleMutation={handleMutation}
          />
        );
      }}
    </Mutation>
  );
};
