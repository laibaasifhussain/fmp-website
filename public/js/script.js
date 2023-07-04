// ======================================================= Database Start =======================================================

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
import { getDatabase, push, set, ref, onValue, update, remove } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtjZsKIOu3hLwJo2WQdsv7Ov27cc1CCgQ",
    authDomain: "fmp-website-24c86.firebaseapp.com",
    projectId: "fmp-website-24c86",
    storageBucket: "fmp-website-24c86.appspot.com",
    messagingSenderId: "549247902443",
    appId: "1:549247902443:web:a327a0e84d58e6f03994ae",
    measurementId: "G-E54RQKJGTN"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var form = document.getElementById("contactForm");


window.sendData = function () {
    var obj = {
        userName: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phonenum: document.getElementById("number").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
    var reference = push(ref(database, 'Users Data/'));
    obj.id = reference.key;
    set(reference, obj);
    alert("Thank You For Contacting Us!! We Will Reach You Soon.");
    form.reset();
}

// ======================================================= Database End =======================================================
