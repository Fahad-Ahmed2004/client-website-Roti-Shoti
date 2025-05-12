
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAE4e5wotbEN7jgS8fAfB8J8b7oXX9oPF8",
  authDomain: "roti-shoti-740bf.firebaseapp.com",
  databaseURL: "https://roti-shoti-740bf-default-rtdb.firebaseio.com",
  projectId: "roti-shoti-740bf",
  storageBucket: "roti-shoti-740bf.firebasestorage.app",
  messagingSenderId: "504620139786",
  appId: "1:504620139786:web:1a9c3f1f8d24d93fc826f3"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

// Scrollbar navbar 
var nav = document.querySelector(".navigation-wrap");

window.onscroll = function (){

    if(document.documentElement.scrollTop > 20){

        nav.classList.add("scroll-on");

    }else{

        nav.classList.remove("scroll-on");

    }

}

// nav hide  

var navBar = document.querySelectorAll(".nav-link");

var navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function (a){

    a.addEventListener("click", function(){

        navCollapse.classList.remove("show");

    })

})

// signup.js

document.addEventListener("DOMContentLoaded", function () {
  
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var signupBtn = document.getElementById("signupBtn");

    if (signupBtn) {

        signupBtn.addEventListener("click", function (e) {

            e.preventDefault();

            var name = nameInput.value;
            var email = emailInput.value;
            var password = passwordInput.value;

            if (!name || !email || !password) {

                alert("Please fill in all fields.");

                return;

            }

            firebase.auth().createUserWithEmailAndPassword(email, password)

            .then((userCredential) => {

                var user = userCredential.user;

                return firebase.database().ref("users/" + user.uid).set({

                    name: name,
                    email: email

                });

            })

            .then(() => {

                alert("Signup successful!");

                window.location.href = "index.html";

            })

            .catch((error) => {

                alert(error.message);

            });

        });

    }

});

// login.js

document.addEventListener("DOMContentLoaded", function () {
  
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var loginBtn = document.getElementById("loginBtn");

    if (loginBtn) {

        loginBtn.addEventListener("click", function (e) {

            e.preventDefault();

            var email = emailInput.value;
            var password = passwordInput.value;

            if (!email || !password) {

                alert("Please enter both email and password.");

                return;

            }

            firebase.auth().signInWithEmailAndPassword(email, password)
        
            .then((userCredential) => {

                alert("Login successful!");

                window.location.href = "index.html";

            })

            .catch((error) => {

                alert("Error: " + "plz Signup first !");

            });

        });

    }

});
