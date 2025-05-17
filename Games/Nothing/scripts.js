const map = document.querySelector(".map")
const player = document.querySelector(".player")

const moveTop = document.querySelector("#top")
const moveBottom = document.querySelector("#bottom")
const moveRight = document.querySelector("#right")
const moveLeft = document.querySelector("#left")
const moveBack = document.querySelector("#back")

let x = 0
let y = 0

moveTop.addEventListener("click", () => {
  x -= 10
  player.style.top = `${x}em`
})

moveBottom.addEventListener("click", () => {
  x += 10
  player.style.top = `${x}em`
})

moveLeft.addEventListener("click", () => {
  y += 10
  player.style.left = `${y}em`
})

moveRight.addEventListener("click", () => {
  y -= 10
  player.style.left = `${y}em`
})

moveBack.addEventListener("click", () => {
  player.style.left = `0`
  player.style.top = `0`
})