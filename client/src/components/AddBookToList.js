import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { CircularProgress } from '@material-ui/core';
import { GET_ME } from '../App';
import InfoSnackbar from './InfoSnackbar';

const ADD_BOOK_TO_LIST = gql`
  mutation addBookToList($bookId: ID!) {
    addBookToList(bookId: $bookId) {
      id
      avgRating
      readCount
    }
  }
`;

// =================================================================
export default ({ info, setInfo }) => {
  return (
    <Mutation mutation={ADD_BOOK_TO_LIST}>
      {(addBookToList, { loading, error }) => {
        const handleClose = () => {
          addBookToList({
            variables: { bookId: info.bookId },
            refetchQueries: [{ query: GET_ME }]
          });

          setInfo({ open: false, msg: '', bookId: 0 });
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
          console.log('ADDBOOKTOLIST ERROR OBJECT ');
          console.log(error);
        }

        return <InfoSnackbar info={info} handleClose={handleClose} />;
      }}
    </Mutation>
  );
};
