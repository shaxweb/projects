const viewPassword = document.getElementById("viewPassword")
const db = localStorage;
const haveCurrentUser = JSON.parse(db.getItem("currentUser")) || null

if (haveCurrentUser != null) { window.location.href = "index.html" }

viewPassword.addEventListener("click", () => {
  const status = viewPassword.checked;
  const pwInput = document.getElementById("password")
  
  if (status) { pwInput.type = "text" } else {pwInput.type = "password"}
})

const checkUsername = (username) => {
  let users = JSON.parse(db.getItem("users")) || null
  if (users == null) { return false }
  for (let user of users) { if (user.username == username) { return true }}
  return false
}

const registerUser = (username, password) => {
  let users = JSON.parse(db.getItem("users")) || []
  let globalData = JSON.parse(db.getItem("globalData")) || {id: 1}
  
  // if (username == "" || !username || !password) { return alert("Error")}
  if (!username || !password) { return alert("Error") }
  if (password.length < 8) { return alert("Password so small") }
  
  if (!checkUsername(username)) {
    let user = {
      id: globalData.id,
      username: username,
      password: password
    }
    users.push(user)
    users = JSON.stringify(users)
    currentUser = JSON.stringify(user)
    globalData = JSON.stringify({id: globalData.id + 1})
    
    db.setItem("users", users)
    db.setItem("currentUser", currentUser)
    db.setItem("globalData", globalData)
  } else { return alert("Username already taked!")}
}

const loginUser = (username, password) => {
  const users = JSON.parse(db.getItem("users")) || []
  
  if (checkUsername(username)) {
    let user = {}
    for (let i of users) { if (i.username == username) { user = i }}
    if (user.password == password) {
      let currentUser = JSON.stringify(user)
      db.setItem("currentUser", currentUser)
      window.open("index.html")
    } else { return alert("UnCorrect Password")}
  } else { return alert("Username Not Found") }
}