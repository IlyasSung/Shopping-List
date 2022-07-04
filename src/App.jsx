import React from 'react';
import { Button, Stack, Box } from '@mui/material';
import { auth } from './lib/firebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


function App() {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  console.log(user ? user : null);
  return (
    <Stack 
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Box>
        <Button 
          variant="outlined" 
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Login
        </Button>
        <p>
          Welcome {user ? user.user.displayName : null}!
        </p>
      </Box>

      <Box>
        <Button variant="outlined" >Print List</Button>
      </Box>
    </Stack>
  );
}

export default App;
