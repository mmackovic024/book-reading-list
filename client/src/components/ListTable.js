import React, { useState } from 'react';
import MaterialTable from 'material-table';
import RemoveBookFromList from './RemoveBookFromList';

// =================================================================
export default props => {
  const [info1, setInfo1] = useState({ open: false, msg: '', bookId: 0 });
  return (
    <>
      <MaterialTable
        {...props}
        actions={[
          {
            icon: 'delete',
            iconProps: { style: { color: 'red' } },
            tooltip: 'Remove book from list',
            onClick: (event, book) => {
              setInfo1({
                open: true,
                msg: `${book.title} removed from Your list`,
                bookId: book.id
              });
            }
          }
        ]}
      />
      <RemoveBookFromList info={info1} setInfo={setInfo1} />
    </>
  );
};
