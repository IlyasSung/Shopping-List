import React from 'react';
import { Button, Stack, TextField } from '@mui/material';

function Add() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="flex-end"
      spacing={2}
    >
      <TextField id="standard-basic" label="Add" variant="standard" />
      <Button variant="outlined">Add</Button>
    </Stack>
  );
}

export default Add;
