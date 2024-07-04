
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCV-alh2gsV9C0VPCSi-MNoUUY_eUy8Zwk",
    authDomain: "my-first-project-949b8.firebaseapp.com",
    projectId: "my-first-project-949b8",
    storageBucket: "my-first-project-949b8.appspot.com",
    messagingSenderId: "788981189508",
    appId: "1:788981189508:web:d40518a78b351a7b102bd1",
    measurementId: "G-4SGCBWWF6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log("App =>" , app);

const analytics = getAnalytics(app);

const auth = getAuth(app);
// console.log("Auth =>" , auth);

const signup_email = document.getElementById("signup_email")
const signup_password = document.getElementById("signup_password")
const signup_btn = document.getElementById("signup_btn")

const signin_email = document.getElementById("signin_email")
const signin_password = document.getElementById("signin_password")
const signin_btn = document.getElementById("signin_btn")


signup_btn.addEventListener("click", createUserAccount)
signin_btn.addEventListener("click" , signAccount)

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is logged in");
        const uid = user.uid;

    } else {
        console.log("User is not logged in");
    }
});

function createUserAccount() {
    // console.log("email =>" , signup_email.value);
    // console.log("email =>" , signup_password.value);

    createUserWithEmailAndPassword(
        auth,
        signup_email.value,
        signup_password.value
    )
        .then((userCredential) => {

            const user = userCredential.user;
            console.log("User =>", user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
}

function signAccount () {
    
}