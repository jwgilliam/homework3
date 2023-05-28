const monsterComponent = (monster) => {
  const icon = `${monster.name.map(
    element => `${element.icon}`
  )}`

  return `
    <section class="monster_card">
    <div class="monster_header">
      <div class ="monster_name">name: ${monster.name}</div>
      <div class ="monster_size">size: ${monster.size}</div>
      <div class ="monster_type">type: ${monster.type}</div>
    </div>
    
    <div class="monster_content">
      <div class="monster_alignment">alignment: ${monster.alignment}</div>
      <div class="weather_condition">${weather.weather.map(
    element => `
          ${element.description}
        `
  ).join("")}
      </div>
    </div>

    </section>
  `
}

export default monsterComponent