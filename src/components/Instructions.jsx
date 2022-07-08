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
      <Typography>To learn how to use this Shopping List follow the instructions below:</Typography>
      <Typography>1. To get started, Login with your gmail account!</Typography>
      <Typography>2. Once logged-in the Shopping List will appear</Typography>
      <Typography>3. Use the textfields ("Add" and "#") and then the Add button to add items to the Shopping List</Typography>
      <Typography>4. All items in the Shopping List are displayed and can be removed by using the delete icon</Typography>
      <Typography>5. The "Clear List" button can be used to remove all items at once</Typography>
    </Stack>
  );
}

export default Instructions;
