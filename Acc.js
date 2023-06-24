Name_Usr = ""
function Search(){
    window.location = "Search.html"
}
function UsrName(){
   Name_Usr= sessionStorage.getItem("Name_Usr")
   document.getElementById("User_name").innerHTML = Name_Usr
}