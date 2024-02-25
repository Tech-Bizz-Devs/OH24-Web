import { initializeApp } from 'firebase/app'
import 'firebase/auth'; 
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD-tFS3NuV4GMNVmxFsZTUpqCXluCAwn5g",
    authDomain: "email-verification-69868.firebaseapp.com",
    projectId: "email-verification-69868",
    storageBucket: "email-verification-69868.appspot.com",
    messagingSenderId: "663360936179",
    appId: "1:663360936179:web:564f8ee735a9540d59ff86",
    measurementId: "G-JFRKZZS64L",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const auth = firebaseApp.auth();

const auth = getAuth(initializeApp(firebaseConfig))

export { auth };