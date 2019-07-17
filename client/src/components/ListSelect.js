import React from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core';

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
          value="all"
          control={<Radio checked={selectedValue === 'all'} name="all" />}
          label="All books in database"
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
          label="Books in Your reading list"
          labelPlacement="end"
        />
      </RadioGroup>
    </>
  );
};
