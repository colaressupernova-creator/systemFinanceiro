import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBv6WXwVOU_gv1K_-x4MX1fYqaKoav5Hz8",
  authDomain: "resolution-25a51.firebaseapp.com",
  databaseURL: "https://resolution-25a51-default-rtdb.firebaseio.com",
  projectId: "resolution-25a51",
  storageBucket: "resolution-25a51.firebasestorage.app",
  messagingSenderId: "902491001825",
  appId: "1:902491001825:web:3566f4dba8df45dcea78a0",
  measurementId: "G-RH5ZJKFYKK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
