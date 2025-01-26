import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyACSJhsllHYXBh8fN__GLshnueFzP0ndiA",
  authDomain: "hakathone-bbf41.firebaseapp.com",
  projectId: "hakathone-bbf41",
  storageBucket: "hakathone-bbf41.appspot.com",
  messagingSenderId: "588283603352",
  appId: "1:588283603352:web:dd3c1342bfffda52e5a3ed",
  measurementId: "G-Y3GL7T4VN6",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)