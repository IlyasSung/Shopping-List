import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import ShoppingListRow from './ShoppingListRow';

function generate(element: React.ReactElement) {
  return [0, 1, 2, 3].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

function ShoppingList() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid item xs={12} md={6}>
        <List dense>
          {generate(
            <ShoppingListRow />
          )}
        </List>
      </Grid>
    </Box>
  );
}

export default ShoppingList;
