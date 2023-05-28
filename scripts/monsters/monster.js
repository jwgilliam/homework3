

const monsterComponent = (monster) => {

  console.log(monster)
  // const thingy = `${monster.results.map(
  //   element => `${element.name}`

  // )
  //   }`



  return `

    <section class="monster_card">
     <div class="monster_header">
      <div class ="monster_name">name: ${monster.name}</div>
      <div class ="monster_size">size: ${monster.size}</div>
     <div class ="monster_type">type: ${monster.type}</div>
    </div>
    
      </section>
  `

}

export default monsterComponent