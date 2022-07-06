import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function ShoppingListRow() {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary="Single-line item"
        secondary="Secondary text"
      />
    </ListItem>
  );
}

export default ShoppingListRow;
