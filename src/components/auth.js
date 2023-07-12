import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Button, TextField, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

export const Auth = ({ continueAsGuest }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignInMode, setIsSignInMode] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  const handleToggleMode = () => {
    setIsSignInMode(!isSignInMode);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignInMode) {
        await signInWithEmailAndPassword(auth, email, password);
        // Log in successful, perform desired actions
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        // Account created successfully, perform desired actions
      }
    } catch (error) {
      setError(error);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleContinueAsGuest = () => {
    continueAsGuest();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Typography variant="h6" color="primary">{isSignInMode ? 'Sign In' : 'Sign Up'}</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          margin="normal"
        />
        <br />
        <TextField
          label="Password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          margin="normal"
        />
        <br />
        <Button type="submit" variant="contained" color="primary" style={{ textAlign: 'center' }}>
          {isSignInMode ? 'Sign In' : 'Sign Up'}
        </Button>
        <br />
        <Button variant="text" color="inherit" onClick={handleToggleMode} style={{ textAlign: 'center' }}>
          {isSignInMode ? 'Create an Account' : 'Already have an account? Sign In'}
        </Button>
        <br />
        <Button variant="text" color="inherit" onClick={handleContinueAsGuest} style={{ textAlign: 'center' }}>
          Continue as Guest
        </Button>
      </form>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          {error && (
            <Typography>
              {error.code}: {error.message}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
