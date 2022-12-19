var firebaseConfig = {
    apiKey: "AIzaSyCTwPq9chAAX41xuJodEAV7xmuuqg4Uc4Y",
    authDomain: "letschatweb-app.firebaseapp.com",
    databaseURL: "https://letschatweb-app-default-rtdb.firebaseio.com",
    projectId: "letschatweb-app",
    storageBucket: "letschatweb-app.appspot.com",
    messagingSenderId: "1018418141423",
    appId: "1:1018418141423:web:20c0c67ddc6175437c631a"
  };
  firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");

      document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

  function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 

function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
//End code
});});}
getData();