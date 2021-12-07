//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAqlnf1yIIGMJTfX2b6RCptpL_27c2JQ1Q",
    authDomain: "kwitter-2d48c.firebaseapp.com",
    databaseURL: "https://kwitter-2d48c-default-rtdb.firebaseio.com",
    projectId: "kwitter-2d48c",
    storageBucket: "kwitter-2d48c.appspot.com",
    messagingSenderId: "492501694636",
    appId: "1:492501694636:web:f50051942fcfa9afa94709"
  };
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").clild(room_name).update({
        purpose : "adding room name"
    })
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";

}

function getData(){ firebase.database().ref("/").on('value', function(snapshot){document})

}

console.log(RoomName - "+ Room_names")
row = "<div.class='room_name" id
