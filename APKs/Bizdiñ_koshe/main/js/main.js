const db = localStorage;
const sdb = sessionStorage;
const user = JSON.parse(db.getItem("user")) || null
const unlocked = JSON.parse(sdb.getItem("unlocked")) || { status: false }

if (!unlocked.status) {
  window.location.href = "../unlock.html"
} else if (user == null) {
  window.location.href = "../index.html"
}