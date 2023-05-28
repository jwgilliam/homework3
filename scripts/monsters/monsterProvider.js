import settings from "../.settings.js"

let monster = []

export const useMonster = () => {
  return monster
}

export const getMonster = (monsterSearch) => {
  return fetch(`https://api.open5e.com/monsters/?search=${monsterSearch}`)
    .then(response => response.json())
    .then(
      parsedMonster => {
        console.table(parsedMonster)
        monster = parsedMonster.list.slice()
      }

    )
}
