const keyInput = document.getElementById("keyInput")
const mainBox = document.querySelector("main")
const justBox = document.querySelector(".box")

let secrets = {"shaxrux": "Hello, World", "URL": "https://t.me/pirimbetov12"}

keyInput.addEventListener("input", () => {
  let text = keyInput.value
  if (secrets[text]) {
    justBox.textContent = secrets[text]
  } else if (text == "shaxaddsecret") {
    alert("In Development")
    keyInput.value = "Empty";
    return;
    key = prompt("Key: ")
    secret = prompt("Secret: ")
    secret[key] = secret
    alert("Added")
  }
})