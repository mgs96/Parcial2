import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB3IFpxozA1c3sj8jE6cpg4Wpu9P11TejI",
    authDomain: "csbw-b5275.firebaseapp.com",
    databaseURL: "https://csbw-b5275.firebaseio.com",
    storageBucket: "csbw-b5275.appspot.com",
    messagingSenderId: "123311217266"
};
firebase.initializeApp(config);

const ref = firebase.database().ref()
const firebaseAuth = firebase.auth

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}


export function get_tokens () {
  return firebase.auth().currentUser.getToken(/* forceRefresh */ true).then(function(idToken) {
    // Send token to your backend via HTTPS
    // ...
  }).catch(function(error) {
  // Handle error
  });
} 

export function verify(){
  return firebaseAuth().currentUser.getToken(true);
}
