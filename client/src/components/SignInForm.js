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

  const hadleSignin = () => signIn({ variables: { username, password } });

  error = error ? error.message.split(':')[1] : null;

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sign in</DialogTitle>
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
              autoComplete={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={hadleSignin} color="primary">
              Sign in
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
