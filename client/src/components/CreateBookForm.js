import React, { useState } from 'react';
import {
  Button,
  InputLabel,
  OutlinedInput,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';
import { GET_BOOKS } from './Data';

export default ({ open, handleClose, createBook, error }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(1);

  const handleCreateBook = () => {
    let variables = { title, author, rating: +rating };
    createBook({
      variables,
      refetchQueries: [{ query: GET_BOOKS }]
    });
  };

  if (error) {
    // console.log(error);
    const e = error.message.split(':');
    error = e[e.length - 1];
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="create-book-form"
        disablePortal
      >
        <DialogTitle id="create-book-form">Add Book</DialogTitle>
        {error && (
          <DialogContent>
            <p style={{ color: 'red', margin: 0, padding: 0 }}>{error}</p>
          </DialogContent>
        )}
        <form>
          <DialogContent>
            <InputLabel htmlFor="title" shrink>
              Title
            </InputLabel>
            <OutlinedInput
              style={{ marginBottom: '1rem' }}
              autoFocus
              margin="dense"
              id="title"
              name="title"
              type="text"
              value={title}
              fullWidth
              required
              autoComplete="title"
              onChange={({ target: { value } }) => setTitle(value)}
            />
            <InputLabel htmlFor="author" shrink>
              Author
            </InputLabel>
            <OutlinedInput
              style={{ marginBottom: '1rem' }}
              margin="dense"
              id="author"
              name="author"
              type="text"
              value={author}
              fullWidth
              required
              autoComplete="new-author"
              onChange={({ target: { value } }) => setAuthor(value)}
            />
            <InputLabel htmlFor="rating" shrink>
              Rating
            </InputLabel>
            <OutlinedInput
              margin="dense"
              id="rating"
              name="rating"
              type="number"
              inputProps={{ min: 1, max: 5 }}
              value={rating}
              fullWidth
              required
              onChange={({ target: { value } }) => setRating(value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCreateBook} color="primary">
              Save Book
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
