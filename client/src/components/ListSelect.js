import React from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core';

// =================================================================
export default ({ selectedValue, handleChange }) => {
  return (
    <>
      <RadioGroup
        style={{ justifyContent: 'center', marginTop: '2rem' }}
        aria-label="select"
        name="select"
        value={selectedValue}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          style={{ margin: '0rem 1rem 0rem 2rem' }}
          value="users"
          control={
            <Radio
              color="primary"
              checked={selectedValue === 'users'}
              name="users"
            />
          }
          label="List of users"
          labelPlacement="end"
        />
        <FormControlLabel
          style={{ margin: '0rem 1rem 0rem 2rem' }}
          value="all"
          control={
            <Radio
              color="primary"
              checked={selectedValue === 'all'}
              name="all"
            />
          }
          label="List of books"
          labelPlacement="end"
        />
        <FormControlLabel
          style={{ margin: '0rem 1rem 0rem 2rem' }}
          value="list"
          control={
            <Radio
              color="primary"
              checked={selectedValue === 'list'}
              name="list"
            />
          }
          label="Your reading list"
          labelPlacement="end"
        />
      </RadioGroup>
    </>
  );
};
