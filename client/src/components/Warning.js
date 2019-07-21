import React, { useContext } from 'react';
import { ApolloConsumer } from 'react-apollo';
import { Snackbar, SnackbarContent, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Error, Close } from '@material-ui/icons';
import { WarningContext } from '../App';

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

// =================================================================
export default () => {
  const classes = useStyles();
  const { warning, setWarning } = useContext(WarningContext);

  const handleClose = client => {
    if (warning.reload) {
      setWarning({ open: false, msg: '', reload: false });
      client.resetStore();
    } else {
      setWarning({ open: false, msg: '', reload: false });
    }
  };

  return (
    <ApolloConsumer>
      {client => (
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          open={warning.open}
          autoHideDuration={2000}
          onClose={() => handleClose(client)}
        >
          <SnackbarContent
            className={classes.error}
            aria-describedby="client-snackbar"
            message={
              <span id="client-snackbar" className={classes.message}>
                <Error className={classes.icon} />
                {warning.msg}
              </span>
            }
            action={
              <IconButton
                key="close"
                color="inherit"
                onClick={() => handleClose(client)}
              >
                <Close />
              </IconButton>
            }
          />
        </Snackbar>
      )}
    </ApolloConsumer>
  );
};
