const firebaseConfig = { apiKey: "AIzaSyBbhikUP6b_bP0r-4ClykRoxQIIrGZ0bpU", authDomain: "deliverybd-1b122.firebaseapp.com", databaseURL: "https://deliverybd-1b122-default-rtdb.firebaseio.com", projectId: "deliverybd-1b122", storageBucket: "deliverybd-1b122.appspot.com", messagingSenderId: "425366124520", appId: "1:425366124520:web:71fe94d775ac6e82bed65d" };
firebase.initializeApp(firebaseConfig)

var nic = localStorage.getItem("SU")
var rom = localStorage.getItem("ar")

function getData() { firebase.database().ref("/"+rom).on('value', function(snapshot) { document.getElementById("allMensages").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
      var name = childData["name"]
      var like = childData["like"]
      var mensage = childData["message"]

      var l1 = "<h4 class='message_h4'>"+ name +"</h4>"
      var l2 = "<h4 class='message_h4'>"+ mensage +"</h4>"
      var l3 = "<button onclick='updLike("+ firebaseMessageId +")' class='btn btn-success' id='"+ firebaseMessageId +"' value='"+ like +"'> likes:"+ like +"</button>"

      document.getElementById("allMensages").innerHTML += l1 + l2 + l3
//Fim do código
      } });  }); }
getData();

function updLike(firebaseMessageId) {
      like = Number(document.getElementById(firebaseMessageId).value)+1
}


function sendma() {
      var meng = document.getElementById("mensager").value
      firebase.database().ref(rom).push({
            name: nic,
            message: meng,
            like: 0
      })
      document.getElementById("mensager").value = ""
}

function exit() {
      window.location = "Untitled_Room.html"
}

var firebaseMessages = document.getElementById("firebase-messages");
firebaseMessages.innerHTML = "New Firebase message";

nic = localStorage.getItem("SU")
rom = localStorage.getItem("ar")