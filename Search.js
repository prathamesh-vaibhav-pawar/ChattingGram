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
  found = ""
  function Search_usr(){
    Usr_name = document.getElementById("Name").value
    document.getElementById("Accounts").innerHTML = " "
    function getData() { firebase.database().ref("/"+Usr_name).on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
        localStorage.setItem("UserName",Usr_name)
        document.getElementById("Accounts").innerHTML = "<div class = 'Output' id = "+Usr_name+" onclick = 'redirect(this.id)'>"+Usr_name+"</div><hr>"
     } });  }); }
getData();
document.getElementById("Accounts").innerHTML = "User You are Searching for not found"
  }
  function redirect(name){
    console.log(name)
    localStorage.setItem("link",name)
    window.location = "Profile.html"
}