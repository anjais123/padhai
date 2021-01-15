import firebase from "firebase/app";
import "firebase/auth";

function signUpNewUser(){
    var uname = document.getElementById("userName").value;
    var pwd = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(uname, pwd).then((user) => {
    var ran = "New User Registered";
    alert(ran);
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Unable to register. Please try again");
  });
}

function signInWithEmailPassword() {
    var email = document.getElementById("loginId").value;
    var password = document.getElementById("loginPwd").value;
    // [START auth_signin_password]
    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
         // alert("User logged in successfully");
         if(user)
          document.getElementById('labelName').innerHTML = "Welcome " + user.uid;
         else 
          document.getElementById('labelName').innerHTML = "user";
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Either emailId/password is not correct");
      });

  }