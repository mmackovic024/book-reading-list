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

export default ({ user, open, handleClose, editUser, error }) => {
  const [username, setUsername] = React.useState(user.username);
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState(user.email || '');

  const handleEdit = () => {
    let variables = { username, password };
    if (email) variables = { ...variables, email };
    editUser({ variables });
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
        aria-labelledby="edituser-form"
        disablePortal
      >
        <DialogTitle id="edituser-form">Edit user data</DialogTitle>
        {error && (
          <DialogContent>
            <p style={{ color: 'red', margin: 0, padding: 0 }}>{error}</p>
          </DialogContent>
        )}
        <form>
          <DialogContent>
            <InputLabel htmlFor="username" shrink>
              New username
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
              New password or confirm old password
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
              autoComplete="new-password"
              onChange={({ target: { value } }) => setPassword(value)}
            />
            <InputLabel htmlFor="email" shrink>
              New email
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
            <Button onClick={handleEdit} color="primary">
              Save Changes
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
