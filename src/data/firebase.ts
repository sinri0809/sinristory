import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

import { getDatabase } from 'firebase/database';
import { initializeFirestore, getFirestore, FirestoreSettings, doc } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBIwDCTYaKETq5FMnopUAijupJ_PTvthxw",
  authDomain: "sinristory.firebaseapp.com",
  projectId: "sinristory",
  storageBucket: "sinristory.appspot.com",
  messagingSenderId: "902908976866",
  appId: "1:902908976866:web:e4c7b90f2ce5ba2a5c88bb",
  measurementId: "G-Q8CBWWDTY3"
};

// TODO: change eng vars
// const firebaseConfig2 = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_SOTRAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MESUREMENT_ID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// * storage
const storage = getStorage(app);
const testStorageRef = ref(storage, '/emoji/1-1.png');
// const testUrl = getDownloadURL(testStorageRef);
// testUrl.then((value) => {
//   console.log(value)
// })

// * database
const db = getDatabase(app);
const fs = getFirestore(app);

// * analytics
// const analytics = getAnalytics(app);

export { storage, db, fs };