firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div2").style.display = "block";
    document.getElementById("login_div2").style.display = "none";


  } else {
    // No user is signed in.

    document.getElementById("user_div2").style.display = "none";
    document.getElementById("login_div2").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field2").value;
  var userPass = document.getElementById("password_field2").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}

// function deleteNotebook(temp){
//   const db = firebase.firestore();
//   db.collection("notebook").doc(temp).delete().then(() => {
//     console.log("Document successfully deleted!");
// }).catch((error) => {
//     console.error("Error removing document: ", error);
// });
// }
