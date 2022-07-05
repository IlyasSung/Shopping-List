import React from 'react';
import { Stack, Typography } from '@mui/material';
import { auth } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


function Header() {
  const [user] = useAuthState(auth);
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Typography variant="h1">Shopping List</Typography>
      <Typography variant="subtitle1">
        {user ? `Welcome ${user.displayName}!` : 'Please Login'}
      </Typography>
      <Typography>Instructions!</Typography>
    </Stack>
  );
}

export default Header;
