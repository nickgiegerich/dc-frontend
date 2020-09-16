import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAbB1W6hiiuacPeizYWEaf2crRbEU94OUk",
    authDomain: "devilscorral-5d104.firebaseapp.com",
    databaseURL: "https://devilscorral-5d104.firebaseio.com",
    projectId: "devilscorral-5d104",
    storageBucket: "devilscorral-5d104.appspot.com",
    messagingSenderId: "53130339855",
    appId: "1:53130339855:web:bf9cb11bf9d5948fdca57a",
    measurementId: "G-B2SEJ75498"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
