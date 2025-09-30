// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgcy5-lTdZeVTKvm_uCj2fNQJmnCel9TU",
  authDomain: "resume-builder-4acc0.firebaseapp.com",
  projectId: "resume-builder-4acc0",
  storageBucket: "resume-builder-4acc0.appspot.com",
  messagingSenderId: "1025793919232",
  appId: "1:1025793919232:web:005e7083b8de459fba4be5",
  measurementId: "G-BNX55TJ3HS"
//  apiKey: "AIzaSyCmH27OITpB7cQOZ-1fTuuGJ8xIyBS1UoU",
//   authDomain: "resume-4571e.firebaseapp.com",
//   projectId: "resume-4571e",
//   storageBucket: "resume-4571e.firebasestorage.app",
//   messagingSenderId: "293530549963",
//   appId: "1:293530549963:web:bb9b9c64c953e753b9e54e",
//   measurementId: "G-FXEC2Q9TBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;