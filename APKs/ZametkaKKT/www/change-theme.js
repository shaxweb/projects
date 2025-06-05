document.documentElement.style.setProperty('--bg-color', '#222');
document.documentElement.style.setProperty('--text-color', 'white');
const style = document.documentElement.style
const theme_db = localStorage;

const updateTheme = (type) => {
  let currentTheme = theme_db.getItem("currentTheme") || "light"
  if (currentTheme == "dark") {
    style.setProperty("--color1", "#000000")
    style.setProperty("--color2", "#242424")
    style.setProperty("--shadow", "#6B6B6B")
    style.setProperty("--txt-color", "#FFFFFF")
    if (type == "change") { theme_db.setItem("currentTheme", "light") }
  } else if (currentTheme == "light") {
    style.setProperty("--color1", "#F7F7F7")
    style.setProperty("--color2", "#FFFFFF")
    style.setProperty("--shadow", "#E0E0E0")
    style.setProperty("--txt-color", "#000000")
    if (type == "change") { theme_db.setItem("currentTheme", "dark") }
  }
}

updateTheme("update")
window.addEventListener("dblclick", () => {updateTheme("change"); updateTheme("update")})