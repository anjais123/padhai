
function signUpNewUser(){
    var uname = document.getElementById("userName").value;
    var pwd = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(uname, pwd).then((user) => {
    var ran = "New User Registered";
    window.alert(ran);
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
        window.alert("Either emailId/password is not correct");
      });

  }

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById('labelName').innerHTML = "Welcome " + user.uid;
      window.alert("User is signed in");
  
    } else {
      window.alert("User is not signed in");
  
    }
  });