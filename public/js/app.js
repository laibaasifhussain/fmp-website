// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9iobdueWFce40gVbvxbGOVO7CBWysnwI",
    authDomain: "arsalan-sohail.firebaseapp.com",
    databaseURL: "https://arsalan-sohail-default-rtdb.firebaseio.com",
    projectId: "arsalan-sohail",
    storageBucket: "arsalan-sohail.appspot.com",
    messagingSenderId: "333552034106",
    appId: "1:333552034106:web:17f60a592fe1c215ebb003",
    measurementId: "G-H3WYHC4103"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase();

var email = document.getElementById("email");

window.sendData = function () {
    if (!email.value) {
        alert("Please enter your email")
        return;
    }
    const obj = {
        email: email.value
    }
    const userRef = push(ref(database, 'User data'));
    obj.id = userRef.key;
    set(userRef, obj);
    console.log("Succeed");
    email.value = ""
}