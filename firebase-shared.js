import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyA-Edt2MC8yZiHI_WRQKte5VEncEUIP1L4",
  authDomain: "daily-check-in-86968.firebaseapp.com",
  projectId: "daily-check-in-86968",
  storageBucket: "daily-check-in-86968.firebasestorage.app",
  messagingSenderId: "1063521708690",
  appId: "1:1063521708690:web:1bad506bb31982d0a2d44b",
  measurementId: "G-55SNKVD5B7"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

await setPersistence(auth, browserLocalPersistence);

export function waitForAuthReady() {
  return auth.authStateReady();
}
