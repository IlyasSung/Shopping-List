import React from 'react';
import { Stack } from '@mui/material';
import Instructions from './components/Instructions';
import Add from './components/Add';
import NavBar from './components/NavBar';
import ShoppingList from './components/ShoppingList';

function App() {
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
        <Add />
        <ShoppingList />
      </Stack>
    </>
  );
}

export default App;
