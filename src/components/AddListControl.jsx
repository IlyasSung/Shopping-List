import React, { useState } from 'react';
import { Button, Stack, TextField, Divider } from '@mui/material';
import { doc, setDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firestore, auth } from '../lib/firebase';

function AddListControl() {
  const [user] = useAuthState(auth);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const createGroceryList = () => {
    const docRef = doc(firestore, "Users", user.uid);
    const data = {
      name: name,
      quantity: quantity
    }
    return setDoc(docRef, data);
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="flex-end"
      spacing={2}
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
          onClick={() => {
            createGroceryList("ilyassung@gmail.com");
          } }
        >
          Add
        </Button>
        <Divider orientation="vertical" flexItem />
        <Button variant="outlined">Clear List</Button>
      </Stack>
    </Stack>
  );
}

export default AddListControl;

