let db = localStorage;
let current_user = {}

let register = (username, password1, password2) => {
  if (password1 != password2) {
    return alert("Error")
  }
  
  let global = JSON.parse(db.getItem("global")) || {id: 1};
  let users = JSON.parse(db.getItem("users")) || [];
  
  user = {
    id: global.id,
    username: username,
    password: password2
  }
  users.push(user)
  users = JSON.stringify(users)
  global = JSON.stringify({id: global.id + 1})
  
  db.setItem("users", users)
  db.setItem("global", global)
  alert("Done!")
}


let startNowLink = document.querySelector("#startNowLink")
let startNowBtn = document.querySelector("#startNowBtn")


startNowBtn.addEventListener("click")
