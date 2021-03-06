import React, { useState } from 'react';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Grid
} from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import SignIn from './SignIn';
import SignOutButton from './SignOutButton';
import SignUp from './SignUp';
import EditUser from './EditUser';

// =================================================================
export default ({ user }) => {
  const [openIn, setOpenIn] = useState(false);
  const [openUp, setOpenUp] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleSignIn = () => {
    setOpenIn(true);
  };

  const handleCloseIn = () => setOpenIn(false);

  const handleSignUp = () => {
    setOpenUp(true);
  };

  const handleCloseUp = () => setOpenUp(false);

  const handleEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => setOpenEdit(false);

  const name = user ? user.username : null;

  return (
    <>
      <CssBaseline />
      <AppBar
        id="nav-bar"
        position="fixed"
        style={{ backgroundColor: blue[300], padding: '0.375rem 0' }}
      >
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
                  <EditUser
                    user={user}
                    open={openEdit}
                    handleClose={handleCloseEdit}
                  />
                  <Typography variant="body2" align="center">
                    Username:{' '}
                    {
                      <>
                        <Button
                          style={{ textTransform: 'none' }}
                          color="primary"
                          variant="contained"
                          size="small"
                          onClick={handleEdit}
                        >
                          {name}
                        </Button>
                      </>
                    }{' '}
                    {user.bookCount} books on Your list
                  </Typography>
                </Grid>
                <Grid item>
                  <SignOutButton />
                </Grid>
              </>
            )}
            {!name && (
              <>
                <Grid item>
                  <SignIn open={openIn} handleClose={handleCloseIn} />
                  <Button
                    color="inherit"
                    variant="outlined"
                    onClick={handleSignIn}
                    style={{ margin: '0 0.5rem' }}
                  >
                    Sign in
                  </Button>
                  <SignUp open={openUp} handleClose={handleCloseUp} />
                  <Button
                    color="primary"
                    variant="outlined"
                    onClick={handleSignUp}
                    style={{ margin: '0 0.5rem' }}
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
