const db = localStorage;

const updatePage = () => {
  let urlsListBox = document.querySelector(".urls-list")
  let urls = JSON.parse(db.getItem("urls")) || null
  if (urls == null) { return }
  
  let text = ""
  for (let i of urls) {
    text += `
<button class="container-btn" onclick="location.href='${i.url}'">
  <h2>${i.url}</h2>
</button>
`
  }
  urlsListBox.innerHTML = text
}

const addNewUrl = (url) => {
  let urls = JSON.parse(db.getItem("urls")) || []
  let globalData = JSON.parse(db.getItem("globalData")) || {id: 1}
  if (!url.trim()) { return alert("Empty error") }
  if (!url.startsWith("https://")) { return alert("Url error") }
  let newUrl = {
    id: globalData.id,
    url: url
  }
  
  urls.push(newUrl)
  urls = JSON.stringify(urls)
  globalData = JSON.stringify({id: globalData.id + 1})
  
  db.setItem("urls", urls)
  db.setItem("globalData", globalData)

  window.location.href = url
}

updatePage()