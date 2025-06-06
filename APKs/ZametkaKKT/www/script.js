const db = localStorage;
const sdb = sessionStorage;
let notesListBox = document.querySelector(".notes-list")
let viewNoteBox = document.getElementById("view-note")

const updatePage = () => {
  let notes = JSON.parse(db.getItem("notes")) || []
  let textContent = ""
  
  for (let i of notes) {
    textContent += `
      <button class="note" onclick="viewNote(${i.id})">
        <h2>${i.name}</h2><br>
        <p class="date">${i.created_at}</p>
      </button>
    `
  }
  if (textContent == "") { return notesListBox.innerHTML = `<div id='emptyNotesMsg'><h2>Baza bos</h2><button onclick="location.href='create_note.html'">Zametka jaratiw</button></div>` }
  notesListBox.innerHTML = textContent
}

const addNote = (name, text) => {
  let notes = JSON.parse(db.getItem("notes")) || []
  let globalData = JSON.parse(db.getItem("globalData")) || {id: 1}
  let note = {
    id: globalData.id,
    name: name,
    text: text
  }
  notes.push(note)
  notes = JSON.stringify(notes)
  globalData = JSON.stringify({id: globalData.id + 1})
  
  db.setItem("notes", notes)
  db.setItem("globalData", globalData)
}

const viewNote = (id) => {
  let notes = JSON.parse(db.getItem("notes")) || []
  let note = null
  
  for (let i of notes) {if (i.id == id) { note = i} }
  if (note == null) { return alert("Заметка табилмади") }
  
  viewNoteBox.style.display = "block"
  viewNoteBox.innerHTML = `
<h2>${note.name}</h2><hr><br>
<pre>${note.text}</pre><br><br><br>
<div class="buttons">
<button onclick="deleteNote(${note.id})">Óshiriw</button>
<button onclick="closeNoteViewBox()">Jabıw</button>
</div>
  `
}

const deleteNote = (id) => {
  let notes = JSON.parse(db.getItem("notes")) || []
  let newNotes = []
  
  for (let i of notes) {if (i.id != id) { newNotes.push(i) } }
  
  let deleteConfirm = confirm("Shınında da óshiriwdi qáleysiz be?")
  if (deleteConfirm) {
    db.setItem("notes", JSON.stringify(newNotes))
    viewNoteBox.style.display = "none"
    updatePage()
  }
}

const closeNoteViewBox = () => {
  viewNoteBox.innerHTML = ""
  viewNoteBox.style.display = "none"
}

setInterval(updatePage(), 1000)
updatePage()