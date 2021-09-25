
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";


// Your web app's Firebase configuration
const devConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const prodConfig = {};

const firebaseConfig = process.env.NODE_ENV === "development" ? devConfig : prodConfig;


firebase.initializeApp(firebaseConfig);

export default firebase;
