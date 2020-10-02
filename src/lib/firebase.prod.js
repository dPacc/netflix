import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// We need to seed the DB

// We need config here
const config = {
    apiKey: "AIzaSyBa7FJa8or5Ma0znBym_dMjY99y1DmlgKA",
    authDomain: "netflix-b6419.firebaseapp.com",
    databaseURL: "https://netflix-b6419.firebaseio.com",
    projectId: "netflix-b6419",
    storageBucket: "netflix-b6419.appspot.com",
    messagingSenderId: "1036311786434",
    appId: "1:1036311786434:web:5c7dbc5df9c17b26c29c5b"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };