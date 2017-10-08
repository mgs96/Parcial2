import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAvMxzeqxYwCVI7ShMRADR70JxXjgK5hSo",
    authDomain: "webclass-1eedb.firebaseapp.com",
    databaseURL: "https://webclass-1eedb.firebaseio.com",
    projectId: "webclass-1eedb",
    storageBucket: "webclass-1eedb.appspot.com",
    messagingSenderId: "635910669835"
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
  console.log(user)
  return ref.child(`users/${user.uid}/info`)
    .push({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}

export function createPost (post) {
  console.log(post)
  return ref.child('posts')
    .push({
      title: post.title,
      desc: post.desc,
      date: post.date
    })
    .then(() => post)
}

export function get_reference(node) {
  return firebase.database.ref().child()
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
