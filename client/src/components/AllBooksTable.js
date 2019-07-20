import React, { useContext, useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { CircularProgress } from '@material-ui/core';
import MaterialTable from 'material-table';
import { GET_ME } from '../App';
import { GET_BOOKS } from './Data';
import { WarningContext } from '../App';
import AddRating from './AddRating';

const ADD_BOOK_TO_LIST = gql`
  mutation addBookToList($bookId: ID!) {
    addBookToList(bookId: $bookId)
  }
`;

// =================================================================
export default props => {
  const { setWarning, setReload } = useContext(WarningContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [bookId, setBookId] = useState(null);

  const {
    user: { books }
  } = props;

  return (
    <Mutation mutation={ADD_BOOK_TO_LIST}>
      {(addBookToList, { loading, error }) => {
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
          const e = error.message.split(':');
          const msg = e[e.length - 1];
          console.log('ALL BOOKS COMPONENT ERROR  ====  ' + msg);
          setWarning({ open: true, msg });
        }

        const handleRating = (e, book) => {
          setBookId(book.id);
          setAnchorEl(e.currentTarget);
        };

        return (
          <>
            <MaterialTable
              {...props}
              actions={[
                {
                  icon: 'add',
                  tooltip: 'Add book to reading list',
                  onClick: (e, book) => {
                    if (!books.map(b => b.id).includes(book.id)) {
                      addBookToList({
                        variables: { bookId: book.id },
                        refetchQueries: [
                          { query: GET_ME },
                          { query: GET_BOOKS }
                        ]
                      });
                    } else {
                      setReload(false);
                      setWarning({ open: true, msg: 'Already on list' });
                    }
                  }
                },
                {
                  icon: 'star_rate',
                  tooltip: 'Rate book',
                  onClick: (e, book) => handleRating(e, book)
                },
                {
                  icon: 'add',
                  tooltip: 'Add new book to database',
                  isFreeAction: true,
                  onClick: (e, book) => console.log('Add new book to database')
                }
              ]}
            />
            <AddRating
              bookId={bookId}
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
            />
          </>
        );
      }}
    </Mutation>
  );
};
