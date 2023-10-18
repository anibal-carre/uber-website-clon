import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmI3BIQqYeCy1c1foVNS9cUdiRbrhcJUc",
  authDomain: "uber-clon-c7fa2.firebaseapp.com",
  projectId: "uber-clon-c7fa2",
  storageBucket: "uber-clon-c7fa2.appspot.com",
  messagingSenderId: "181264988492",
  appId: "1:181264988492:web:e13c5914e9c3cfc7adf7e9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
