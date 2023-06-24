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
  Usr_name = []
  Times = 1
  function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       USr = childKey;
       Usr_name = USr
       console.log(Usr_name)
      });});}
getData();
// Function to clear local storage
function clearLocalStorage() {
    localStorage.clear();
  }
  
  // Add event listener to the 'beforeunload' event
  window.addEventListener('beforeunload', clearLocalStorage);
  window.addEventListener('unload', clearLocalStorage);

function search(){
    User_name = document.getElementById("name").value
    sessionStorage.setItem("Name_Usr",User_name) 
    localStorage.setItem("Name_Usr",User_name)
    Name1 = localStorage.getItem("Name_Usr")
    for(i=0;i<Times;i++){
        if(Name1 != i){
            function getData() { firebase.database().ref("/"+User_name).on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                Email = message_data['Email']
                Password = message_data['Password']
                console.log(firebase_message_id+message_data)
                localStorage.setItem(firebase_message_id,message_data)
             } });  }); }
        getData();
       document.getElementById("output").innerHTML = "Done!"
        }else{
            document.getElementById("output").innerHTML = "This User Name not Found"
        }
    }
}
function Login(){
   EMail =  localStorage.getItem("Email")
   Password = localStorage.getItem("Password")
    RePassword = document.getElementById("Passs").value
    Mail = document.getElementById("Email").value 
    if(EMail != Mail&&Password != RePassword){
        document.getElementById("output").innerHTML = "Error"
    }else{
        console.log("Success")
        localStorage.clear()
        window.location="Acc.html"
    }
}
function myFunction() {
    var x = document.getElementById("Passs");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }