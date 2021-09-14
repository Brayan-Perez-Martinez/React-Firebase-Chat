import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyALr6C3Qq7zKtpW4gF-QXcv2JhGsG9Azl0',
  authDomain: 'chat-3-f5ede.firebaseapp.com',
  projectId: 'chat-3-f5ede',
  storageBucket: 'chat-3-f5ede.appspot.com',
  messagingSenderId: '609632085241',
  appId: '1:609632085241:web:fef81e595861f7d4e56e28'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
