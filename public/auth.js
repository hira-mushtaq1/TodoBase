
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";

  import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
 

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBwwp8qH9Jz1m9Z9mRZA9V5OXsxGbqPQqk",
    authDomain: "todobase-30d65.firebaseapp.com",
    databaseURL: "https://todobase-30d65-default-rtdb.firebaseio.com",
    projectId: "todobase-30d65",
    storageBucket: "todobase-30d65.appspot.com",
    messagingSenderId: "171626640335",
    appId: "1:171626640335:web:da8c4f5fc5d3c519f058ba",
    measurementId: "G-90FMX3KYXN"
  };

  // Initialize Firebase
var app = initializeApp(firebaseConfig);
//   var analytics = getAnalytics(app);
var auth = getAuth();


window.gotoLogIn=function(){
    window.location.href='signIn.html'
}

window.gotoSignUp=function(){
    window.location.href='signUp.html'
}
window.signUp=function(){
    //get ids
var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var userPassword = document.getElementById('userPassword');
var obj={
    userName:userName.value,
    userEmail:userEmail.value,
    userPassword:userPassword.value,
}
createUserWithEmailAndPassword(auth, obj.userEmail, obj.userPassword)
  .then((userCredential) => {
    // Signed in 
    alert(`Hi ${obj.userName} You have been registerd successfully`)
    window.location.href='Index.html'
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert( errorMessage,errorCode)
    // ..
  });


}

window.signIn=function(){
    var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var userPassword = document.getElementById('userPassword');
var obj={
    userName:userName.value,
    userEmail:userEmail.value,
    userPassword:userPassword.value,
}
signInWithEmailAndPassword(auth, obj.userEmail, obj.userPassword)
  .then((userCredential) => {

    // Signed in 
    var user = userCredential.user;
    alert(`Hi ${obj.userName} You have been logged in successfully`)
    // ...
window.location.href="home.html"


  })
  .catch((error) => {

    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
  userName.value = ''
  email.value = ''
  password.value = ''
}

window.logOut = function(){
signOut(auth).then(() => {
  // Sign-out successful.
  alert("Signed Out Successfully!");
  window.location.href = 'home.html'
}).catch((error) => {
  // An error happened.
  alert(error);
});
}





