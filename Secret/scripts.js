const keyInput = document.getElementById("keyInput")
const mainBox = document.querySelector("main")

keyInput.addEventListener("input", () => {
  let text = keyInput.value
  if (text == "shaxrux" || text == "Shaxrux") {
    alert("He is my owner!")
    keyInput.value = "yeaahh!";
    
    mainBox.innerHTML = `
    <div class="box">
      <h2>Enter the secret key</h2><br>
      <input id="keyInput" placeholder="Secret Key">
    </div>
    
    <div class="box">
      <h2>This is him link</h2>
      <p>@pirimbetov12</p>
    </div>
    `;
    
  }
})