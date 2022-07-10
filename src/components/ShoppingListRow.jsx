import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { doc, deleteDoc } from "firebase/firestore";
import { firestore } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';

//Implements how each item's name and quantity is displayed and allows the user to remove items with the delete icon.

function ShoppingListRow(props) {
  const [user] = useAuthState(auth);
  const {id, name, quantity} = props;
  return (
    <ListItem
      sx={{ minWidth: 500 }}
      secondaryAction={
        <IconButton 
          edge="end" 
          aria-label="delete"
          onClick={() => deleteDoc(doc(firestore, "Users", user?.uid, 'ShoppingList', id))}
        >
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
