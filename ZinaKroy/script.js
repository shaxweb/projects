const db = localStorage;


const saveOrder = (name, price) => {
  let orders = JSON.parse(db.getItem("orders")) || []
  let globalData = JSON.parse(db.getItem("globalData")) || {id: 1}

  let order = {
    id: globalData.id,
    name: name,
    price: price,
  }
  
  orders.push(order)
  orders = JSON.stringify(orders)
  globalData = JSON.stringify({id: globalData.id + 1})
  
  db.setItem("orders", orders)
  db.setItem("globalData", globalData)
  window.location.href = "index.html"
}