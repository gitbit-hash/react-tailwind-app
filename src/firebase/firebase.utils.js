import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4nqnlmnfkoZ2gKhJvFmXa0xm0SDVM8TE",
  authDomain: "tailwind-crwn-db.firebaseapp.com",
  databaseURL: "https://tailwind-crwn-db.firebaseio.com",
  projectId: "tailwind-crwn-db",
  storageBucket: "tailwind-crwn-db.appspot.com",
  messagingSenderId: "976624538735",
  appId: "1:976624538735:web:3acdb17681ec962acb299a"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestor = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

