const typingBox = document.querySelector(".typing")
const questionBox = document.querySelector(".question")

let quesLen = 1

let typeKeyboard = (type) => {
  let text = typingBox.textContent
  
  if (type == "space") {type = "_"}
  else if (type == "rem") {
    typingBox.textContent = text.slice(0, -1)
    return;
  }
  
  if (text.length <= 12) {
    text += type
    if (text == "SHAXCODER_12" && quesLen == 1) {
      typingBox.textContent = " "
      questionBox.textContent = "BMW M or BMW I?"
      quesLen += 1
      return;
      
    } 
    if (text == "MVERSION" && quesLen == 2) {
      alert("Okay!")
    }
    typingBox.textContent = text
  }
}