import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyB6F1eJaVWXzXMUA3vCKoHKCStQ5N9My1M",
    authDomain: "barter-system-9a0d2.firebaseapp.com",
    databaseURL: "https://barter-system-9a0d2-default-rtdb.firebaseio.com",
    projectId: "barter-system-9a0d2",
    storageBucket: "barter-system-9a0d2.appspot.com",
    messagingSenderId: "598059335591",
    appId: "1:598059335591:web:fb2efe70180c4e89430082",
    measurementId: "G-GX7C3QPSNT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();