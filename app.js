// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
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
const analytics = getAnalytics(app);
const auth = getAuth(app);

const signup_email = document.getElementById("signup_email");
const signup_password = document.getElementById("signup_password");
const create_btn = document.getElementById("create_btn");


const signIn_email = document.getElementById("signIn_email");
const signIn_password = document.getElementById("signIn_password");
const logIn_btn = document.getElementById("logIn_btn");

const auth_container = document.getElementById("auth_container");
const user_container = document.getElementById("user_container");

const user_email = document.getElementById("user_email");
const logout_btn = document.getElementById("logout_btn");



create_btn.addEventListener("click", createUserAccount);
logIn_btn.addEventListener("click", signInAccount);

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("user is logged in");

        const uid = user.uid;

        auth_container.style.display = "none";
        user_container.style.display = "block";
        user_email.innerText = user_email;
        // ...
    } else {
        console.log("user is not logged in");
        // User is signed out
        // ...
        auth_container.style.display = "block";
        user_container.style.display = "none";
    }
});

function createUserAccount() {
    // console.log("Email =>" , signup_email.value);
    // console.log("Password =>" , signup_password.value);

    createUserWithEmailAndPassword(

        auth,
        signup_email.value,
        signup_password.value
    )

        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

    alert(errorMessage)

    // main.container.style.diplay = 
}



function signInAccount() {
    // console.log("Email =>" , signIn_email.value);
    // console.log("password =>" , signIn_password);

    console.log("user");


    signInWithEmailAndPassword(
        auth,
        signIn_email.value,
        signIn_password.value
    )

        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });


}