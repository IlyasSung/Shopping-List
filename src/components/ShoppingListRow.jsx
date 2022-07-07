import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function ShoppingListRow(props) {
  const {id, name, quantity} = props;
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary={name}
        secondary={`quantity: ${quantity}`}
      />
    </ListItem>
  );
}

export default ShoppingListRow;
