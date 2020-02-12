import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = firebase.initializeApp({
    apiKey: "AIzaSyDGjZOCDDD9zCskRFGpC6SWJB6Ndc9ot-A",
    authDomain: "boss-777b0.firebaseapp.com",
    databaseURL: "https://boss-777b0.firebaseio.com",
    projectId: "boss-777b0",
    storageBucket: "boss-777b0.appspot.com",
    messagingSenderId: "517422757515",
    appId: "1:517422757515:web:78552f734308e190c3468e"
});

export const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccess: () => false    
        }
};

export { config as firebase };