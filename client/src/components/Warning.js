import React from 'react';
import { Snackbar, SnackbarContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Error } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  error: {
    backgroundColor: theme.palette.error.dark,
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

export default () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      open={open}
      autoHideDuration={5000}
      onClick={handleClose}
    >
      <SnackbarContent
        className={classes.error}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Error className={classes.icon} />
            Error! Reload or try again later.
          </span>
        }
      />
    </Snackbar>
  );
};
