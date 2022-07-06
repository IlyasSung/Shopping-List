import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCWEadyS17qQfFRnnKiTHtPa23xgea2ILI",
    authDomain: "serene-mender-355212.firebaseapp.com",
    projectId: "serene-mender-355212",
    storageBucket: "serene-mender-355212.appspot.com",
    messagingSenderId: "791534049325",
    appId: "1:791534049325:web:807883ece42ecd717040a4",
    measurementId: "G-VWKHDH20V7"
  };
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

