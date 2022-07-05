import React from 'react';
import { Button, Stack, Box, Divider } from '@mui/material';

function ListControl() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
    >
      <Box>
        <Button variant="outlined">Print List</Button>
      </Box>
      <Box>
        <Button variant="outlined">Clear List</Button>
      </Box>
    </Stack>
  );
}

export default ListControl;
