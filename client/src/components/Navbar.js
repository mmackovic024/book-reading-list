import React from 'react';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Button,
  Typography
  // Grid
} from '@material-ui/core';
import SignIn from './SignIn';
import SignOutButton from './SignOutButton';
import Cat from '../Cat.png';

export default ({ user }) => {
  const [open, setOpen] = React.useState(false);

  const handleSignIn = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const name = user.Me ? user.Me.username : null;

  return (
    <>
      <CssBaseline />
      <AppBar id="nav-bar" position="fixed">
        <Toolbar>
          <Typography variant="h5" align="center">
            Book reading list app
          </Typography>
          <img
            src={Cat}
            height="45px"
            style={{ marginLeft: 'auto' }}
            alt="logo"
          />
          {name && (
            <>
              <Typography
                variant="body1"
                align="right"
                style={{ marginLeft: 'auto' }}
              >
                Welcome {name}, {user.Me.bookCount} books on Your list
              </Typography>
              <SignOutButton />
            </>
          )}
          {!name && (
            <>
              <SignIn open={open} handleClose={handleClose} />
              <Button
                color="inherit"
                variant="outlined"
                style={{ marginLeft: 'auto' }}
                onClick={handleSignIn}
              >
                Sign in
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
