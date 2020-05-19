import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCLnI38dJNgFwvhwD_HRjsQt8ZoB0kpnHk",
    authDomain: "crwn-db-d3eec.firebaseapp.com",
    databaseURL: "https://crwn-db-d3eec.firebaseio.com",
    projectId: "crwn-db-d3eec",
    storageBucket: "crwn-db-d3eec.appspot.com",
    messagingSenderId: "819651464116",
    appId: "1:819651464116:web:5e8828afb04aaf392340e1",
    measurementId: "G-9Y8TLV9B2P"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase; 

