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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;