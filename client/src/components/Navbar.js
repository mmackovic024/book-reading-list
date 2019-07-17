import React from 'react';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Grid
} from '@material-ui/core';
import SignIn from './SignIn';
import SignOutButton from './SignOutButton';
import SignUp from './SignUp';

export default ({ user }) => {
  const [openIn, setOpenIn] = React.useState(false);
  const [openUp, setOpenUp] = React.useState(false);

  const handleSignIn = () => {
    setOpenIn(true);
  };

  const handleCloseIn = () => setOpenIn(false);

  const handleSignUp = () => {
    setOpenUp(true);
  };

  const handleCloseUp = () => setOpenUp(false);

  const name = user ? user.username : null;

  return (
    <>
      <CssBaseline />
      <AppBar id="nav-bar" position="fixed" style={{ padding: '0.375rem 0' }}>
        <Toolbar>
          <Grid
            container
            spacing={3}
            alignItems="center"
            alignContent="center"
            justify="space-around"
          >
            <Grid item>
              <Typography variant="h6" align="center">
                Book reading list app
              </Typography>
            </Grid>
            {name && (
              <>
                <Grid item xs={12} sm="auto">
                  <Typography
                    variant="body2"
                    align="center"
                    style={{ marginLeft: 'auto' }}
                  >
                    Welcome {name}, {user.bookCount} books on Your list
                  </Typography>
                </Grid>
                <Grid item>
                  <SignOutButton />
                </Grid>
              </>
            )}
            {!name && (
              <>
                <SignIn open={openIn} handleClose={handleCloseIn} />
                <Grid item>
                  <Button
                    color="inherit"
                    variant="outlined"
                    onClick={handleSignIn}
                  >
                    Sign in
                  </Button>
                  <SignUp open={openUp} handleClose={handleCloseUp} />
                  <Button
                    color="secondary"
                    variant="outlined"
                    style={{ marginLeft: 'auto' }}
                    onClick={handleSignUp}
                  >
                    Sign UP
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
