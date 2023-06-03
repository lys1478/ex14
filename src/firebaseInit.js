// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_qNyNGrqTthlDCa0MJS6EnWFyKN30Pco",
  authDomain: "fir-11-4eeed.firebaseapp.com",
  projectId: "fir-11-4eeed",
  storageBucket: "fir-11-4eeed.appspot.com",
  messagingSenderId: "442826249896",
  appId: "1:442826249896:web:c7ed5bde0be2777894149d",
  measurementId: "G-9YQNMXG900"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);