import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCjsM2Hd21AfeX8FCNw1HJOePwda0NUGrk",
  authDomain: "online-clothing-ebad0.firebaseapp.com",
  databaseURL: "https://online-clothing-ebad0.firebaseio.com",
  projectId: "online-clothing-ebad0",
  storageBucket: "online-clothing-ebad0.appspot.com",
  messagingSenderId: "839512688489",
  appId: "1:839512688489:web:a34cd36fd23d7288ce9ff8",
  measurementId: "G-KR85Q1LPVH",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
