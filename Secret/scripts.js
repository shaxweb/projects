const keyInput = document.getElementById("keyInput")
const mainBox = document.querySelector("main")
const justBox = document.querySelector(".box")

let secrets = {"shaxrux": "He is the BEST Developer", "URL": "https://t.me/pirimbetov12"}

keyInput.addEventListener("input", () => {
  let text = keyInput.value
  text = text.toLowerCase()
  
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
  
  if (text == "Al Fatiha" || text == "al fatiha" || text == "Al fatiha") {
    const audio = document.getElementById("al_fatiha")
    let body = document.querySelector("body")
    let header = document.querySelector("header")
    
    keyInput.value = "MaShaAllah, Bro!"
    keyInput.disabled = true;
    audio.play()
    
    body.style.background = "white"
    body.style.color = "white"
    header.style.background = "#00FF66"
    justBox.style.background = "white"
    justBox.style.color = "black"
    justBox.style.border = "2px solid #00FF66"
    keyInput.style.borderLeft = "2px solid #00FF66"
    keyInput.style.color = "black"
  }
})