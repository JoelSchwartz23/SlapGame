let cloud = {
  name: 'Cloud',
  health: 500,
  items: []
}

let sephiroth = {
  name: 'Sephiroth',
  health: 1000,
  hits: 0
}

function attack() {
  sephiroth.health -= 50
  draw()
}

function cut() {
  sephiroth.health -= 200
  draw()
}

function bolt3() {
  sephiroth.health -= 400
  draw()
}

let items = [{
  grenade: {
    name: 'grenade',
    modifier: 4,
    description: 'Throw Grenade'
  },
  molotov: {
    name: 'Molotov',
    modifier: 2,
    description: 'Throw molotov'
  }
}]


function grenade() {
  sephiroth.health -= 150
  draw()
}

function molotov() {
  sephiroth.health -= 400
  draw()
}

function heal() {
  sephiroth.health += 500
  draw()
}



function draw() {
  document.getElementById("health").innerText = sephiroth.health
} 
