

firebase.initializeApp(firebaseConfig);

var email = document.getElementById("email");
var password = document.getElementById("password");
var signInButton = document.getElementById("signInButton");
var signUpButton = document.getElementById("signUpButton");


signInButton?.addEventListener("click", function() {
    // Sign in the user using Firebase's signInWithEmailAndPassword method
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      .then(function() {
        // Redirect the user to the protected resources page
        window.location.href = "index.html";
      })
      .catch(function(error) {
        // Show an error message
        alert(error.message);
      });
  });
  
  signUpButton?.addEventListener("click", function() {
    // Sign up the user using Firebase's createUserWithEmailAndPassword method
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      .then(function() {
        // Redirect the user to the protected resources page
        window.location.href = "index.html";
      })
      .catch(function(error) {
        // Show an error message
        alert(error.message);
      });
  });