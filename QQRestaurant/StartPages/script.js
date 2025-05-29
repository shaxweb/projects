const db = localStorage;
const haveCurrentUser = JSON.parse(db.getItem("currentUser")) || null

if (haveCurrentUser == null) { window.location.href = "../register.html" }

