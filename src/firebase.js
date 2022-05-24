// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD38zd3nu_Vd3tH7BL4Kzx2eSOJp6YytoY",
  authDomain: "clone-ea15b.firebaseapp.com",
  projectId: "clone-ea15b",
  storageBucket: "clone-ea15b.appspot.com",
  messagingSenderId: "933373134407",
  appId: "1:933373134407:web:35004d1214d90ebf999362",
  measurementId: "G-3EYRZ14WCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);