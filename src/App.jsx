import React from 'react';
import { Stack } from '@mui/material';
import { auth } from './lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Instructions from './components/Instructions';
import Add from './components/Add';
import NavBar from './components/NavBar';
import ShoppingList from './components/ShoppingList';


function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <NavBar />
      <Stack
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        sx={{marginTop: "50px"}}
      >
        <Instructions />
        {user ? <Add /> : null}
        {user ? <ShoppingList /> : null}
      </Stack>
    </>
  );
}

export default App;
