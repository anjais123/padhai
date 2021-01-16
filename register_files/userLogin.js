
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
  // Get a reference to the database service
  var database = firebase.database();
  function applyNow(){
    var email = document.getElementById("inputEmailId").value;
    var phone = document.getElementById("inputPhone").value;
    var classNum = document.getElementById("classNo").value;
    var subjects = "";

    if(document.getElementById("english").checked)
    subjects += "english,";
    if(document.getElementById("math").checked)
    subjects += "math,";
    if(document.getElementById("social")!=null && document.getElementById("social").checked)
    subjects += "social,";
    if(document.getElementById("science")!=null && document.getElementById("science").checked)
    subjects += "science,";
    if(document.getElementById("physics")!=null && document.getElementById("physics").checked)
    subjects += "physics,";
    if(document.getElementById("chemistry")!=null && document.getElementById("chemistry").checked)
    subjects += "chemistry,";

    if(email=="" || phone =="" || classNum=="" || subjects=="")
    {
      window.alert("Please enter all the required fields and select atleast one subject");
      return;
  }
  var id = email+classNum;
  var idNew = id.split('.').join("");
  subjects = subjects.split(',').join(" ");
    firebase.database().ref('coursesApply/' + idNew).set({
      email: email,
      phone: phone,
      classNumber : classNum,
      subjects: subjects
    });
    window.alert("Greetings from Studots. Your selection is submitted successfully. Our team will contact you soon!");
  }
