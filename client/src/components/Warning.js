import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import { Snackbar, SnackbarContent, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Error, Close } from '@material-ui/icons';

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

export default props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = client => {
    setOpen(false);
    client.resetStore();
  };

  return (
    <ApolloConsumer>
      {client => (
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          open={open}
          autoHideDuration={5000}
        >
          <SnackbarContent
            className={classes.error}
            aria-describedby="client-snackbar"
            message={
              <span id="client-snackbar" className={classes.message}>
                <Error className={classes.icon} />
                {props.message}
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