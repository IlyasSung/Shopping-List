import React from 'react';
import { Button, Box } from '@mui/material';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';

//Implements the Logout button and functionality.

function Logout() {
  return (
    <Box>
      <Button
        variant="outlined"
        onClick={() => {
          signOut(auth);
        } }
      >
        Logout
      </Button>  
    </Box>
  );
}

export default Logout;

