import React from 'react';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Button,
  Typography
  // Grid
} from '@material-ui/core';
import Login from './Login';
// import Cat from '../../public/Cat.png'

export default () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <CssBaseline />
      <AppBar id="nav-bar" position="fixed">
        <Toolbar>
          <Typography variant="h5" align="center">
            Book reading list app
          </Typography>
          <Login open={open} handleClose={handleClose} />
          <Button
            color="inherit"
            variant="outlined"
            style={{ marginLeft: 'auto' }}
            onClick={handleClickOpen}
          >
            Sign in
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
