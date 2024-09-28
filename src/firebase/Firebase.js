
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBVKagBO7wnNHi-zBgXyOS5luowT18snq0",
  authDomain: "femi-health.firebaseapp.com",
  projectId: "femi-health",
  storageBucket: "femi-health.appspot.com",
  messagingSenderId: "482882055238",
  appId: "1:482882055238:web:9c28367de68e1b59c96e47",
  measurementId: "G-Q0B44NETSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth};