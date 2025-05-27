const db = localStorage;

const checkUser = (username) => {
  let users = JSON.parse(db.getItem("users")) || "null"
  
  if (users == "null") { return false }
  for (let user of users) { if (username === user.username) {return true}}
  return false
}

const registerUser = (username, password) => {
  let users = JSON.parse(db.getItem("users")) || []
  let globalData = JSON.parse(db.getItem("globalData")) || {id: 1}
  
  let user = {
    id: globalData.id,
    username: username,
    password: password
  }
  if (checkUser(username)) { return alert("Username already taked")}
  users.push(user)
  users = JSON.stringify(users)
  currentUser = JSON.stringify(user)
  globalData = JSON.stringify({id: globalData.id + 1})
  
  db.setItem("users", users)
  db.setItem("globalData", globalData)
  db.setItem("currentUser", currentUser)
}

const loginUser = (username, password) => {
  let users = JSON.parse(db.getItem("users")) || []
  
  if (checkUser(username)) {
    let user = {}
    for (let i of users) { if (i.username == username) {user = i}}
    if (user.password == password) {
      user = JSON.stringify(user)
      db.setItem("currentUser", user)
    } else { return alert("Error password")}
  } else { return alert("User Not Found")}
}

