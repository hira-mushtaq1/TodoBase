// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwwp8qH9Jz1m9Z9mRZA9V5OXsxGbqPQqk",
  authDomain: "todobase-30d65.firebaseapp.com",
  databaseURL: "https://todobase-30d65-default-rtdb.firebaseio.com",
  projectId: "todobase-30d65",
  storageBucket: "todobase-30d65.appspot.com",
  messagingSenderId: "171626640335",
  appId: "1:171626640335:web:da8c4f5fc5d3c519f058ba",
  measurementId: "G-90FMX3KYXN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var inp = document.getElementById("inp");
var parent = document.getElementById("parent");

function renderList() {
  var refrence = ref(database, "tasks/");
  onValue(refrence, function (NewData) {
    var Data = Object.values(NewData.val());
    parent.innerHTML = "";
    for (var i = 0; i < Data.length; i++) {
      parent.innerHTML += `<div class="taskbox text-center my-4">
      <p> ${Data[i].text}</p>
      <span class="fs-6">${Data[i].time}</span>
      </div>`;
      inp.value = "";
    }
  });
}

window.add = function () {
  var obj = {
    text: inp.value,
    time: new Date().getHours() + " : " + new Date().getMinutes(),
  };

  //error here
  if (inp.value == "") {
    alert("Please add a Task First");
  } else {
    var refrence = ref(database, "tasks/");
    var newRef = push(refrence);
    set(newRef, obj);

    renderList();
  }
};
