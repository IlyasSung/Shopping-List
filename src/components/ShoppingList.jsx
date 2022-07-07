import React from 'react';
import { firestore } from '../lib/firebase';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import ShoppingListRow from './ShoppingListRow';
import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';

function ShoppingList() {
  const [user] = useAuthState(auth);
  const userRef = collection(firestore, `Users/${user?.uid}/ShoppingList`);
  const [items] = useCollectionData(userRef);
  console.log(items);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid item xs={12} md={6}>
        <List dense>
          {items?.map((item, index) => (
            <ShoppingListRow
              key={index}
              name={item.name} 
              quantity={item.quantity} 
              id={item.id}
            />
          ))}
        </List>
      </Grid>
    </Box>
  );
}

export default ShoppingList;
