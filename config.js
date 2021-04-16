import firebase from 'firebase';

require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCsLzdS9-75HK6aJIBR-8BmGbVaWaNgnXw",
    authDomain: "personaldiary-37725.firebaseapp.com",
    projectId: "personaldiary-37725",
    storageBucket: "personaldiary-37725.appspot.com",
    messagingSenderId: "1066934424340",
    appId: "1:1066934424340:web:3a143da52d127724b32801",
    measurementId: "G-HPD73XD4BS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore()