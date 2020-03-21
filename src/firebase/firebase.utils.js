import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDOAtFCb51SI8CCqHFqt8SUgwz-2aWhmq0",
    authDomain: "crwn-db-c936e.firebaseapp.com",
    databaseURL: "https://crwn-db-c936e.firebaseio.com",
    projectId: "crwn-db-c936e",
    storageBucket: "crwn-db-c936e.appspot.com",
    messagingSenderId: "1065916364650",
    appId: "1:1065916364650:web:25e65c7a0d9870dbeb9713",
    measurementId: "G-Z3CP3V2ZHS"
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
            console.log("error creating user", error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
