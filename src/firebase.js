import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDaoftqoOMf6XMshBkaC1GQZ0bvhIGq1mE",
    authDomain: "wa-clone-e4f79.firebaseapp.com",
    databaseURL: "https://wa-clone-e4f79.firebaseio.com",
    projectId: "wa-clone-e4f79",
    storageBucket: "wa-clone-e4f79.appspot.com",
    messagingSenderId: "379057878566",
    appId: "1:379057878566:web:a06ad6f17678b9a697d8e7",
    measurementId: "G-765SYWP6V4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;

