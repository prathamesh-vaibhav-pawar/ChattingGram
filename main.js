const firebaseConfig = {
    apiKey: "AIzaSyC0cr2scSxjyjUFXjrLDLUXaH0oZGy76QE",
    authDomain: "facebook-78f9b.firebaseapp.com",
    databaseURL: "https://facebook-78f9b-default-rtdb.firebaseio.com",
    projectId: "facebook-78f9b",
    storageBucket: "facebook-78f9b.appspot.com",
    messagingSenderId: "486327737703",
    appId: "1:486327737703:web:87457af01ff37f322b63c2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function Save_data(){
    firstName = document.getElementById("first_name").value 
    Surname = document.getElementById("Surname").value 
    Email = document.getElementById("email").value 
    passowrd = document.getElementById("password").value
    dob = document.getElementById("date").value 
    Usr_name = firstName + " " +Surname
    localStorage.setItem("First name",firstName)
    localStorage.setItem("surname",Surname)
    localStorage.setItem("Email",Email)
    localStorage.setItem("password",passowrd)
    localStorage.setItem("dob",dob)
    UsrName = firstName +" "+ Surname
    localStorage.setItem("USrNAme",UsrName)
    firebase.database().ref("/").child(UsrName).update({
        UsrName:Usr_name,
        FirstName:firstName,
        Surname:Surname,
        Password:passowrd,
        Date_of_Birth:dob,
        Email:Email
    });
    console.info("Your data has been saved re-confirm it!!")
    window.location = "Login.html"
}