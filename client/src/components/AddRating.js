import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Menu, MenuItem, CircularProgress } from '@material-ui/core';

const ADD_RATING = gql`
  mutation addRating($bookId: ID!, $rating: Int!) {
    addRating(id: $bookId, rating: $rating) {
      id
      title
      author
      rating
      avgRating
      readCount
    }
  }
`;

export default ({ bookId, anchorEl, setAnchorEl }) => {
  return (
    <Mutation mutation={ADD_RATING}>
      {(addRating, { loading, error }) => {
        const handleClose = event => {
          if (event.target.value) {
            addRating({ variables: { bookId, rating: event.target.value } });
          }
          setAnchorEl(null);
        };

        if (loading)
          return (
            <CircularProgress
              disableShrink
              size={30}
              thickness={2}
              variant="indeterminate"
              style={{
                position: 'relative',
                left: '50%',
                marginTop: '8rem'
              }}
            />
          );

        if (error) console.log(error);

        return (
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} value={1}>
              1
            </MenuItem>
            <MenuItem onClick={handleClose} value={2}>
              2
            </MenuItem>
            <MenuItem onClick={handleClose} value={3}>
              3
            </MenuItem>
            <MenuItem onClick={handleClose} value={4}>
              4
            </MenuItem>
            <MenuItem onClick={handleClose} value={5}>
              5
            </MenuItem>
          </Menu>
        );
      }}
    </Mutation>
  );
};
