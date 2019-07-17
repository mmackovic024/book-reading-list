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

export default ({ open, handleClose, signUp, error }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const hadleSignUp = () => {
    let variables = { username, password };
    if (email) variables = { ...variables, email };
    signUp({ variables });
  };

  if (error) {
    const e = error.message.split(':');
    error = e[e.length - 1];
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
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
              style={{ marginBottom: '1rem' }}
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
            <InputLabel htmlFor="email" shrink>
              Email
            </InputLabel>
            <OutlinedInput
              margin="dense"
              id="email"
              name="Email"
              type="email"
              value={email}
              fullWidth
              onChange={({ target: { value } }) => setEmail(value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={hadleSignUp} color="primary">
              Sign UP
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
