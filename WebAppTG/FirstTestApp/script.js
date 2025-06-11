const db = localStorage
let numberView = document.getElementById("number_view")


 
const clickUp = () => {
  let number = JSON.parse(db.getItem("number")) || {number: 0};
  db.setItem("number", JSON.stringify({number: number.number + 1}))
  numberView.innerText = `Clicked: ${number.number+1}`
}