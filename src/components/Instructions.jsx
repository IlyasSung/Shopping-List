import React from 'react';
import { Stack, Typography } from '@mui/material';


function Instructions() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Typography>Welcome to your Shopping List Webapp!</Typography>
      <Typography>Instructions!</Typography>
    </Stack>
  );
}

export default Instructions;
