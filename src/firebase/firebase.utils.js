import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapShot = await userRef.get();

  if (!userSnapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('ERROR CREATING NEW USER', error.message)
    }
  };

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

