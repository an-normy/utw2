function adduser() {
    var storageusername = document.getElementById("userName").value
    localStorage.setItem("SU",storageusername)
    window.location = "Untitled_Room.html"
};