import { resolve } from 'dns';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyApKrU2tQd8ZvH68zcHitvNcaVNC4FfEAg",
    authDomain: "ion-com34.firebaseapp.com",
    projectId: "ion-com34",
    storageBucket: "ion-com34.appspot.com",
    messagingSenderId: "135959454606",
    appId: "1:135959454606:web:163f32e681391b2cde3adf",
    measurementId: "G-0WSSRBREQ4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;

export function getCurrentUser() {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                resolve(user)
            }else{
                resolve(user)
            }
            unsubscribe()
        })
    })
}

export async function loginUser(email: string, password: string) {
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(res);
        return true
    } catch (error) {
        console.log(error);
        //toast(error.message, 4000)
        return false
    }
}

export async function registerUser(email: string, password: string) {
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log(res);
        return true
    } catch (error) {
        console.log(error);
        //toast(error.message, 4000)
        return false
    }
}

