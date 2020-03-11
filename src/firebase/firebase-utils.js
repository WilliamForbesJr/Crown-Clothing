import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyD7umHuhr52cn79dfzJJEaXTtLxR8S0Da4",
  authDomain: "crwn-db-d22ca.firebaseapp.com",
  databaseURL: "https://crwn-db-d22ca.firebaseio.com",
  projectId: "crwn-db-d22ca",
  storageBucket: "crwn-db-d22ca.appspot.com",
  messagingSenderId: "459586569892",
  appId: "1:459586569892:web:6fc34bfb6ab77ba8c08831"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;