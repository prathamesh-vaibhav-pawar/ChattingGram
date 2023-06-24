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
 User_send =""
function loaded(){
   USrName =  localStorage.getItem("UserName")
   document.getElementById("Name").innerHTML = USrName
   User_send = USrName
}
console.log(User_send)
function Message(){
   User_name = sessionStorage.getItem("Name_Usr")
   Message_send = User_send + User_name
   sessionStorage.setItem("Message_send",Message_send)
   window.location = "chat.html"
}
