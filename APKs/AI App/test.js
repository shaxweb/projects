const translateUrl = "https://api.from-to.uz/api/v1/translate";
const aiKey = "AIzaSyA_Q3oM-noZoAnso0UZ_UdRmewdavymNOw"
const aiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${aiKey}`

const translateTextBox = document.getElementById("translateTextBox")
const aiTextBox = document.getElementById("aiTextBox")

const translator = async (langFrom, langTo, text) => {
  try {
    const response = await fetch(translateUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        lang_from: langFrom,
        lang_to: langTo,
        text: text
      })
    })
    
    if (response.ok) {
      const data = await response.json()
      translateTextBox.innerText = data.results
    } else {
      translateTextBox.innerText = `${response}`
      console.log(response)
    }
    
  } catch (error) {
    translateTextBox.innerText = error
  }
}


const aiGemini = async (text) => {
  try {
    
    const response = await fetch(aiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{parts: [{text: text}]}]
      }),
    })
    
    if (response.ok) {
      const data = await response.json()
      resultText = data.candidates[0].content.parts[0].text
      aiTextBox.innerText = resultText
    } else {
      alert("Whyyyy??")
    }
    
  } catch (error) {
    console.log(error)
  }
}