import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import SHOP_DATA from '../redux/shop/shop.data'
// let shop = []
// let shopAdd = shop.push(SHOP_DATA.map(obj => obj))
// console.log('Objects to add', shopAdd)
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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
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
            console.log('Error creating user ', error);
        }
    }
    return userRef;
  };

  // Function to add collections to Firebase
  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);
      const batch = firestore.batch();
      objectsToAdd.forEach(obj => {
          const newDocRef = collectionRef.doc();
          batch.set(newDocRef, obj);
      })

      return await batch.commit();
  } 

  // Converting array to obbject for usage
  export const convertCollectionsSnapshotToMap = (collections) => {
      const transformedCollection = collections.docs.map(doc => {
          const { title, items } = doc.data();

          // returns us the object we want to use, already destructured title and items so no need to set them specifically
          return {
              routeName: encodeURI(title.toLowerCase()),
              id: doc.id,
              title,
              items
          }
      });
      return transformedCollection.reduce( (accumulator, collection) => {
          accumulator[collection.title.toLowerCase()] = collection;
          return accumulator
      } ,{})
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase; 

