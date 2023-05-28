// import settings from "../.settings.js"

let monsters = []

export const useMonsters = () => {
  return monsters
}

export const getMonsters = (monsterSearch) => {
  return fetch(`https://api.open5e.com/monsters/?search=${monsterSearch}`)
    .then(response => response.json())
    .then(
      parsedMonsters => {
        console.table(parsedMonsters.results)
        monsters = parsedMonsters.results
      }

    )
}
