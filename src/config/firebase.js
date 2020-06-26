import React from 'react'
import * as firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyDYnAgPgGwTcA8LZa-imEUY2x9QGcWEGHY",
    authDomain: "react-chat-app-ebef8.firebaseapp.com",
    databaseURL: "https://react-chat-app-ebef8.firebaseio.com",
    projectId: "react-chat-app-ebef8",
    storageBucket: "react-chat-app-ebef8.appspot.com",
    messagingSenderId: "455534584871",
    appId: "1:455534584871:web:3564cb940b743c5c1e9a02"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;