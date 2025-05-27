const db = localStorage;
let firstLink = document.querySelector("a")
let currentUser = JSON.parse(db.getItem("currentUser")) || "null"

if (currentUser == "null") {
  firstLink.href = "register.html"
  firstLink.textContent = "Sign Up"
} else {
  firstLink.href = "https://google.com"
  firstLink.textContent = "Google"
}