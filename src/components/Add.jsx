import React, { useState } from 'react';
import { Button, Stack, TextField, Divider } from '@mui/material';
import { doc, setDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firestore, auth } from '../lib/firebase';
import { v4 as uuidv4 } from 'uuid';
import ClearList from './ClearList';

function AddListControl() {
  const [user] = useAuthState(auth);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const submitItems = () => {
    if (name && quantity) { 
      const id = uuidv4();
      const docRef = doc(firestore, "Users", user?.uid, 'ShoppingList', id);
      const data = {
        id: id,
        name: name,
        quantity: quantity
      }
      setName('');
      setQuantity('');
      return setDoc(docRef, data);
    } else {
      alert('Error: Enter valid name and quantity');
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="flex-end"
      spacing={4}
    >
      <TextField 
        label="Add" 
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField 
        label="#" 
        variant="standard" 
        style={{width: 50}}
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value)}
      />
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        spacing={2}
      >
        <Button 
          variant="outlined" 
          onClick={() => submitItems()}
        >
          Add
        </Button>
        <Divider orientation="vertical" flexItem />
        <ClearList />
      </Stack>
    </Stack>
  );
}

export default AddListControl;

