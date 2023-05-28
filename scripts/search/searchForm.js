import { getMonsters } from "../monsters/monsterProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".searchFormContainer")
let searchValue = ""

const searchFormComponent = () => {
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "monsterSearch") {
      searchValue = document.querySelector("#searchField").value
      const message = new CustomEvent("monsterSearchClicked", {
        detail: {
          monsterSearch: searchValue
        }
      })
      eventHub.dispatchEvent(message)
      clickEvent.preventDefault()


    }
  })

  const render = () => {
    contentTarget.innerHTML = `
      <form class="searchForm">
        <input type="text" id="searchField" isRequired/>
        <button id="monsterSearch">search</button>
      </form>
    `
  }
  render()
}

export default searchFormComponent