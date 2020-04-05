import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCGDppwIs0z_pqqmaofFx7HSEXtr09l37M",
  authDomain: "alaska-river-db.firebaseapp.com",
  databaseURL: "https://alaska-river-db.firebaseio.com",
  projectId: "alaska-river-db",
  storageBucket: "alaska-river-db.appspot.com",
  messagingSenderId: "778705554059",
  appId: "1:778705554059:web:e19445343bc19a825a628e",
  measurementId: "G-YMLVRS4VVE"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;