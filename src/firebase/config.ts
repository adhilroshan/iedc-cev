import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyAYwo-RD_sOs-ha8hdQQgVRHenYrwXkwk0',
  authDomain: 'iedc-c2a2e.firebaseapp.com',
  projectId: 'iedc-c2a2e',
  storageBucket: 'iedc-c2a2e.appspot.com',
  messagingSenderId: '1063677909299',
  appId: '1:1063677909299:web:9c2d2bcc1f87f3338a8646',
  measurementId: 'G-5BV43JMSKQ',
};

let app;

// Initialize Firebase
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export { app };
export const db = getFirestore(app);
export const auth = getAuth(app);