// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBYJ6-DgXj9stj2Xdx87by9dEW5JT2W9LA',
  authDomain: 'myfirstapp-d8d82.firebaseapp.com',
  projectId: 'myfirstapp-d8d82',
  storageBucket: 'myfirstapp-d8d82.appspot.com',
  messagingSenderId: '609248382526',
  appId: '1:609248382526:web:f7eab1f149e460c59ccb6f'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const fireDB = getFirestore(app)
const auth = getAuth(app)

export { fireDB, auth }
