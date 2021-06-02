import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDh2ThcGjUZELGcpVIAczg_q3Ry8FI0L8U",
  authDomain: "project-management-tool-7202a.firebaseapp.com",
  projectId: "project-management-tool-7202a",
  storageBucket: "project-management-tool-7202a.appspot.com",
  messagingSenderId: "929845381093",
  appId: "1:929845381093:web:a95ea26934411c4662110c",
  measurementId: "G-DE8SHVKJG3"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapShots: true});

export default firebase;