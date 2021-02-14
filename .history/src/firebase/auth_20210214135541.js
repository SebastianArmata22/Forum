import firebase from "./firebase";
export const providergoogle= new firebase.auth.GoogleAuthProvider()
export const providergithub= new firebase.auth.GithubAuthProvider()
export const providerfacebook= new firebase.auth.FacebookAuthProvider()
export const auth = firebase.auth()