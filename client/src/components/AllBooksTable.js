import React, { useContext, useState } from 'react';
import MaterialTable from 'material-table';
import { WarningContext } from '../App';
import AddRating from './AddRating';
import CreateBook from './CreateBook';
import AddBookToList from './AddBookToList';

// =================================================================
export default props => {
  const { setWarning } = useContext(WarningContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [bookId, setBookId] = useState(null);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({ open: false, msg: '', bookId: 0 });

  const handleCreateBook = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleRating = (e, book) => {
    setBookId(book.id);
    setAnchorEl(e.currentTarget);
  };

  const {
    user: { books }
  } = props;

  return (
    <>
      <MaterialTable
        {...props}
        actions={[
          {
            icon: 'add',
            tooltip: 'Add book to reading list',
            onClick: (event, book) => {
              if (!books.map(b => b.id).includes(book.id)) {
                setInfo({
                  open: true,
                  msg: `${book.title} added to Your list`,
                  bookId: book.id
                });
              } else {
                setWarning({
                  open: true,
                  msg: 'Already on list',
                  reload: false
                });
              }
            }
          },
          {
            icon: 'star_rate',
            iconProps: { style: { color: 'orange' } },
            tooltip: 'Rate book',
            onClick: (e, book) => handleRating(e, book)
          },
          {
            icon: 'add_circle',
            iconProps: { color: 'primary', style: { fontSize: 30 } },
            tooltip: 'Add new book to database',
            isFreeAction: true,
            onClick: () => handleCreateBook()
          }
        ]}
      />
      <AddRating
        bookId={bookId}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
      <CreateBook open={open} handleClose={handleClose} />
      <AddBookToList info={info} setInfo={setInfo} />
    </>
  );
};
