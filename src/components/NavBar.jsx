import React from 'react';
import { Stack, Box, AppBar, Toolbar, Typography } from '@mui/material';
import { auth } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './Login';

function NavBar() {
  const [user] = useAuthState(auth);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Shopping List</Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="subtitle1">
              {user ? `Welcome ${user.displayName}!` : 'Please Login'}
            </Typography>
            <Login />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
