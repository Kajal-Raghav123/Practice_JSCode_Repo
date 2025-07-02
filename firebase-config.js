// Import Firebase scripts dynamically for browser (no npm)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCg90UrY5pGjoDPgLzDJEr_S91uVOCFJ5c",
  authDomain: "super-mall-web-applicati-71bbf.firebaseapp.com",
  projectId: "super-mall-web-applicati-71bbf",
  storageBucket: "super-mall-web-applicati-71bbf.firebasestorage.app",
  messagingSenderId: "622771085382",
  appId: "1:622771085382:web:173f55286ed2e143adea47",
  measurementId: "G-T858F1DWN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Export for use in other scripts
export { db, auth };
