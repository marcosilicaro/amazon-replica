import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDDJ0RoYeTbSC3xVaGYY9mhmReV4C0saVU",
    authDomain: "replica-ed431.firebaseapp.com",
    databaseURL: "https://replica-ed431.firebaseio.com",
    projectId: "replica-ed431",
    storageBucket: "replica-ed431.appspot.com",
    messagingSenderId: "390027387777",
    appId: "1:390027387777:web:b2b23616a8247352a4be80"
})

const auth = firebase.auth()

export { auth }