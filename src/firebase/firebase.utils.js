import firebase from 'firebase/app'

import 'firebase/firestore'

import 'firebase/auth'

const config = {

  apiKey: "AIzaSyCChyCSArXjuh9EFuVCeFJ8PLiJG1w3Lt8",
  authDomain: "crwn-db-2d837.firebaseapp.com",
  databaseURL: "https://crwn-db-2d837.firebaseio.com",
  projectId: "crwn-db-2d837",
  storageBucket: "crwn-db-2d837.appspot.com",
  messagingSenderId: "922209180603",
  appId: "1:922209180603:web:8b1cd767a1cc226ed9029e",
  measurementId: "G-NMGZ6F2HDZ"

}
firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase