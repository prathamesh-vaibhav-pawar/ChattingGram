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
Base = sessionStorage.getItem("Message_send")
function Loaded(){
  User_name = sessionStorage.getItem("Name_Usr")
  User_send = sessionStorage.getItem("User_send")
  firebase.database().ref("/").child(Base).update({
    data:"stored"
  })
}
  function save_message(){
    Message_send = document.getElementById("message").value
    firebase.database().ref("/").child(Base).push({
      User:User_name,
      Message:Message_send,
    })
  }
  function getData() { firebase.database().ref("/"+Base).on('value', function(snapshot) { document.getElementById("Content").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    Message_recived = message_data['Message']
    Name1 = message_data['User']
     UserName = "<h4>"+Name1+"</h4>"
     Message2 = "<h4 class = 'message_h4'>"+Message_recived+"</h4>"
    Row = UserName + Message2
    document.getElementById("Content").innerHTML += Row

    //End code
 } });  }); }
getData();

