const firebaseConfig = { apiKey: "AIzaSyBbhikUP6b_bP0r-4ClykRoxQIIrGZ0bpU", authDomain: "deliverybd-1b122.firebaseapp.com", databaseURL: "https://deliverybd-1b122-default-rtdb.firebaseio.com", projectId: "deliverybd-1b122", storageBucket: "deliverybd-1b122.appspot.com", messagingSenderId: "425366124520", appId: "1:425366124520:web:71fe94d775ac6e82bed65d" };
function Logout() {
    localStorage.removeItem("SU")
    window.location = "index.html"
};

function addRoom() {
    var adrom = document.getElementById("rooms").value
    localStorage.setItem("ar", adrom)
    window.location = "Untitled_Page.html"
};
