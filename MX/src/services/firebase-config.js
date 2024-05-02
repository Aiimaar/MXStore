// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3kdJ3ANPNuipHXsrZkUMWQFK7jc9CeMg",
    authDomain: "mxstore-lnd.firebaseapp.com",
    databaseURL: "https://mxstore-lnd-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "mxstore-lnd",
    storageBucket: "mxstore-lnd.appspot.com",
    messagingSenderId: "318048072118",
    appId: "1:318048072118:web:9fbea08b8f79aa99111117",
    measurementId: "G-R9QN98XK8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;