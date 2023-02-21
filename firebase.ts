import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUvPJ7Tm3JU4V8T8lpCiV1ugYBLbTEpb8",
  authDomain: "tete-47296.firebaseapp.com",
  projectId: "tete-47296",
  storageBucket: "tete-47296.appspot.com",
  messagingSenderId: "604545519359",
  appId: "1:604545519359:web:fbf11da00c9ce5d786c6ca",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
