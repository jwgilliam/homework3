import { getMonsters, useMonsters } from "./monsterProvider.js"
import monsterComponent from "./monster.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".monster")

const monsterListComponent = () => {
  eventHub.addEventListener("monsterSearchClicked", event => {
    console.log('going to get the monster')
    getMonsters(event.detail.monsterSearch).then(
      () => {
        const monsters = useMonsters()
        // monsters.map(
        //   (element) => {
        //     render(element)
        //   }
        // ).join("")
        // console.log(monsters)
        render(monsters)
      }
    )
  })

  const render = (element) => {
    contentTarget.innerHTML = `
    <section class="monster_box">
    <p class="monster_title">Here are the monsters</p>
    <div class="monster_cards">
     ${element.map(currentElement => {
      return monsterComponent(currentElement)
    }
    ).join("")
      }
   </div>
 </section>
    `
  }
}

export default monsterListComponent