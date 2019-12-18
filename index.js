let key = "nGBdesYGe92z2bDC8fBGIc8BVhxOZCBh"
document.addEventListener("DOMContentLoaded", () => {
  let list = document.querySelector("#list")
  let submit = document.querySelector("#submit")
  let content = document.querySelector(".content")
  let form = document.querySelector("#form")
  let userInput = document.querySelector("#userInput")
  let limit = 10
  
  let h1 = document.createElement("h1")

  form.addEventListener("submit", () => {
    giphySearch(search, limit)
  })
  const populateSelect = () => {
    for (let i = 1; i <= 25; i++){
      let option = document.createElement("option")
      option.innerText = i
      option.value = i
      list.appendChild(option)
    }
  }
  const search = async (userInput, userLimit) => {
    let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${userInput}&limit=${userLimit}`)
    console.log(res.data)
  }
  search("desus",limit)
  populateSelect()
})