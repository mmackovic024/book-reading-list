import React from 'react';
import {
  Button,
  InputLabel,
  OutlinedInput,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';

export default ({ open, handleClose, signIn, error }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignin = () => signIn({ variables: { username, password } });

  if (error) {
    const e = error.message.split(':');
    error = e[e.length - 1];
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose} aria-labelledby="signin-form">
        <DialogTitle id="signin-form">Sign in</DialogTitle>
        {error && (
          <DialogContent>
            <p style={{ color: 'red', margin: 0, padding: 0 }}>{error}</p>
          </DialogContent>
        )}
        <form>
          <DialogContent>
            <InputLabel htmlFor="username" shrink>
              Username
            </InputLabel>
            <OutlinedInput
              style={{ marginBottom: '1rem' }}
              autoFocus
              margin="dense"
              id="username"
              name="Username"
              type="text"
              value={username}
              fullWidth
              required
              autoComplete="username"
              onChange={({ target: { value } }) => setUsername(value)}
            />
            <InputLabel htmlFor="password" shrink>
              Password
            </InputLabel>
            <OutlinedInput
              margin="dense"
              id="password"
              name="Password"
              type="password"
              value={password}
              fullWidth
              required
              autoComplete="current-password"
              onChange={({ target: { value } }) => setPassword(value)}
              onKeyUp={e => {
                if (e.keyCode === 13) handleSignin();
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSignin} color="primary">
              Sign in
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
