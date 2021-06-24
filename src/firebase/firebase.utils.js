import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDwcHwFEyPfkM0QUt3_Y9oJJN_n33dKKLw',
  authDomain: 'ecommerce-app-db-45f0d.firebaseapp.com',
  projectId: 'ecommerce-app-db-45f0d',
  storageBucket: 'ecommerce-app-db-45f0d.appspot.com',
  messagingSenderId: '905505656771',
  appId: '1:905505656771:web:594be3def4fd77f7827776',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
