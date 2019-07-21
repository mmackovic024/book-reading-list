import React from 'react';
import { Snackbar, SnackbarContent, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Info, Close } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  error: {
    backgroundColor: theme.palette.primary.light,
    marginTop: '8rem'
  },
  icon: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
}));

// =================================================================
export default ({ info, handleClose }) => {
  const classes = useStyles();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      open={info.open}
      autoHideDuration={1000}
      onClose={handleClose}
    >
      <SnackbarContent
        className={classes.error}
        aria-describedby="client-snackbar"
        message={
          <span id="info-snackbar" className={classes.message}>
            <Info className={classes.icon} />
            {info.msg}
          </span>
        }
        action={
          <IconButton key="close" color="inherit" onClick={handleClose}>
            <Close />
          </IconButton>
        }
      />
    </Snackbar>
  );
};
