const db = localStorage;
const productsBox = document.querySelector(".products")
let products = JSON.parse(db.getItem("products")) || []

const updatePage = () => {
  let products = JSON.parse(db.getItem("products")) || []
  let textContent = ""
  
  for (let product of products) {
    textContent += `
<div>
  <h1>${product.name}</h1>
  <h3>${product.about}</h3>
  <button>Add to Basket</button>
</div>
    `
  }
  productsBox.innerHTML = textContent
}


const createProduct = (name, about, price) => {
  let user = JSON.parse(db.getItem("currentUser")) || null
  let products = JSON.parse(db.getItem("products")) || []
  let globalData = JSON.parse(db.getItem("globalData")) || {id: 1}
  
  if (!user) { return alert("User Not Found") }
  let product = {
    id: globalData.id,
    owner: user.id,
    name: name,
    about: about,
    price: price
  }
  
  products.push(product)
  products = JSON.stringify(products)
  globalData = JSON.stringify({id: globalData.id + 1})
  
  db.setItem("products", products)
  db.setItem("globalData",globalData)
}

updatePage()