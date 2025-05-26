const keyInput = document.getElementById("keyInput")
const mainBox = document.querySelector("main")
const justBox = document.querySelector(".box")

let secrets = {"shaxrux": "He is the BEST Developer", "URL": "https://t.me/pirimbetov12"}
let playing = false;

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
  } else if (text == "my vibe") {
    const audio = document.getElementById("tangled_kingdom")
    
    audio.play()
    setTimeout(() => {audio.pause()}, 5000)
    keyInput.value = "Tangled Kingdom"
    keyInput.disabled = true;
    justBox.innerHTML += "<button onclick='musicPlayer()'>🔘</button>"
  }
  
  if (text == "Al Fatiha" || text == "al fatiha" || text == "al fatiha ") {
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
  
  if (text == "shaxdrift" || text == "shax drift") {
    justBox.innerHTML = "<img src='images/shax_drift.png'>"
  }
  
  if (text == "joram" || text == "joram ") {
    justBox.innerHTML = `<a href="SecretPages/joram/index.html"><button>Usi knopkani bas</button></a>`
  }
})

let musicPlayer = () => {
  const audio = document.getElementById("tangled_kingdom")
  
  if (!playing) {
    audio.play()
    playing = true
  } else {
    audio.pause()
    playing = false
  }
}