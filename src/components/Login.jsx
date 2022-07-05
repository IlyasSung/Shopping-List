import React from 'react';
import { Button, Box } from '@mui/material';
import { auth } from '../lib/firebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


function Login() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <Box>
      <Button
        variant="outlined"
        onClick={() => {
          signInWithGoogle();
        } }
      >
        Login
      </Button>  
    </Box>
  );
}

export default Login;

