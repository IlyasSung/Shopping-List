import React from 'react';
import { Button, Stack, TextField, Divider } from '@mui/material';

function AddListControl() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="flex-end"
      spacing={2}
    >
      <TextField id="standard-basic" label="Add" variant="standard" />
      <TextField id="standard-basic" label="#" variant="standard" style = {{width: 50}} />
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        spacing={2}
      >
        <Button variant="outlined">Add</Button>
        <Divider orientation="vertical" flexItem />
        <Button variant="outlined">Clear List</Button>
      </Stack>
    </Stack>
  );
}

export default AddListControl;
