 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBGDybwRublCyK71uSyPjino6MfP1r5k44",
    authDomain: "ninja-marioplan-ecaba.firebaseapp.com",
    databaseURL: "https://ninja-marioplan-ecaba.firebaseio.com",
    projectId: "ninja-marioplan-ecaba",
    storageBucket: "ninja-marioplan-ecaba.appspot.com",
    messagingSenderId: "849802351359",
    appId: "1:849802351359:web:e959d5a86ab88e0e6ff2ca"
  };
   // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapchot:true})


  export default firebase;