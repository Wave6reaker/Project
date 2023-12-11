
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDueSM4NSdJAtGlrmyk_LyIUER9tXRKizY",
  authDomain: "hexlet-d5a07.firebaseapp.com",
  projectId: "hexlet-d5a07",
  storageBucket: "hexlet-d5a07.appspot.com",
  messagingSenderId: "246980977967",
  appId: "1:246980977967:web:de3718317f86c8950c6dda",
  measurementId: "G-V92WXZ2C1R"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);