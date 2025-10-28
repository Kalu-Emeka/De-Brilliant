// ====== Firebase SDKs ======
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// ====== Your Firebase Config ======
const firebaseConfig = {
  apiKey: "AIzaSyBl10iIOsFLEPGBLjiM4nIeTuORCp8blhg",
  authDomain: "debrilliant-academy.firebaseapp.com",
  projectId: "debrilliant-academy",
  storageBucket: "debrilliant-academy.firebasestorage.app",
  messagingSenderId: "370700525079",
  appId: "1:370700525079:web:c827e83f3452797e4e8652",
  measurementId: "G-X487BF0Q8Z"
};

// ====== Initialize Firebase ======
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ====== Elements ======
const registerBtn = document.getElementById('register-btn');
const emailInput = document.getElementById('auth-email');
const passwordInput = document.getElementById('auth-password');
const messageBox = document.getElementById('auth-message');

// ====== Event Listener ======
registerBtn.addEventListener('click', () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    messageBox.style.color = "red";
    messageBox.textContent = "Please enter email and password.";
    return;
  }

  // Create account
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Send verification email
      sendEmailVerification(user)
        .then(() => {
          messageBox.style.color = "green";
          messageBox.textContent = "✅ Account created! Verification email sent. Check your inbox or spam.";
        })
        .catch((error) => {
          messageBox.style.color = "red";
          messageBox.textContent = "Error sending verification: " + error.message;
        });
    })
    .catch((error) => {
      messageBox.style.color = "red";
      messageBox.textContent = "Error: " + error.message;
    });
});
