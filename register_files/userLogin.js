function signUpNewUser(){
    var uname = document.getElementById("userName");
    var pwd = document.getElementById("password");

    firebase.auth().createUserWithEmailAndPassword(uname, pwd)
  .then((user) => {
    alert("New User Registerd");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Unable to register. Please try again");
  });
}

function signInWithEmailPassword() {
    var email = document.getElementById("userName");
    var password = document.getElementById("password");
    // [START auth_signin_password]
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
          alert("User logged in successfully")
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Either emailId/password is incorrect");
      });
    // [END auth_signin_password]
  }