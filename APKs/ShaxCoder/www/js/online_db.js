const url = "https://fmzuxjifrsctexqzyxsp.supabase.co/rest/v1/users";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtenV4amlmcnNjdGV4cXp5eHNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxNDU5NTMsImV4cCI6MjA2NDcyMTk1M30.Qg3FH0iU8yTnWKA17CJKyEmFwVzSV4la7IyRxlVX1M8"
const authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtenV4amlmcnNjdGV4cXp5eHNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxNDU5NTMsImV4cCI6MjA2NDcyMTk1M30.Qg3FH0iU8yTnWKA17CJKyEmFwVzSV4la7IyRxlVX1M8"

let data = {
  username: "shaxcoder12",
  password: "shaxcoder12"
}

const createUser = (name, password) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": apiKey,
      "Authorization": authorization
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(json => console.log("✅ Inserted:", json))
  .catch(err => console.error("❌ Error:", err));
}

const getUsers = () => {
  fetch("https://fmzuxjifrsctexqzyxsp.supabase.co/rest/v1/users", {
    method: "GET",
    headers: {
      "apikey": apiKey,
      "Authorization": authorization
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    for (let i of data) { console.log(i) }
  });
}

username = prompt("Username")
password = prompt("Password")
createUser(username, password)
getUsers()