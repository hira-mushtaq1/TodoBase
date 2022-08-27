window.gotoLogIn = function () {
  window.location.href = "signIn.html";
};

window.gotoSignUp = function () {
  window.location.href = "signUp.html";
};

const loginForm = document.getElementById("login-form");
const signUpForm = document.getElementById("signup-form");

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.user = user;
  } else {
    if (window.location.pathname === "/home.html") {
      window.location.href = "index.html";
    }
  }
});

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    login(formProps.email, formProps.password);
  });
}

if (signUpForm) {
  signUpForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    signUp(formProps.email, formProps.password);
  });
}

let signUp = function (email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      alert(`You have been registerd successfully`);
      window.user = userCredential;
      window.location.href = "signIn.html";
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      let errShow = document.getElementById("error");
      errShow.classList.remove("hidden");
      errShow.innerHTML = errorMessage;
      // ...
    });
};

let login = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((data) => {
      window.location.href = "home.html";
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      let errShow = document.getElementById("error");
      errShow.classList.remove("hidden");
      errShow.innerHTML = errorMessage;
      // ...
    });
};

const logOut = function () {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      alert("Signed Out Successfully!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      // An error happened.
      alert(error);
    });
};
