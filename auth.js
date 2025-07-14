import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function login() {
  const email = document.getElementById("email").value;
  const pw = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, pw);
  } catch (e) {
    document.getElementById("loginStatus").innerText = "Ralat: " + e.message;
  }
}

onAuthStateChanged(auth, user => {
  if (user) window.location.href = "dashboard.html";
});
