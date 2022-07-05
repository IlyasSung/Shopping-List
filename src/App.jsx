import React from 'react';
import { Stack } from '@mui/material';
import Login from './components/Login';
import Header from './components/Header';
import ListControl from './components/ListControl';
import Add from './components/Add';

function App() {
  return (
    <Stack
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
    >
      <Login />
      <Header />
      <ListControl />
      <Add />
    </Stack>
  );
}

export default App;
