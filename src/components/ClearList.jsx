import React from 'react';
import { Button } from '@mui/material';
import { doc, deleteDoc, collection } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore, auth } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

//Implements the ClearList button and functionality.

function ClearList() {
  const [user] = useAuthState(auth);
  const userRef = collection(firestore, `Users/${user?.uid}/ShoppingList`);
  const [items] = useCollectionData(userRef);

  //Removes the collection holding every item for the user.

  const deleteCollection = () => {
    items.forEach(item => deleteDoc(doc(firestore, "Users", user?.uid, 'ShoppingList', item.id)))
  };

  return (
    <Button 
      variant="outlined"
      onClick={() => deleteCollection()}
    >
      Clear List
    </Button>
  );
}

export default ClearList;

