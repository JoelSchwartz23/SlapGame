let cloud = {
  name: 'Cloud',
  health: 500,
  attacks: {
    attack: 50,
    grenade: 100,
    bolt3: 150
  },
  items: []
}

let sephiroth = {
  name: 'Sephiroth',
  health: 1000,
  hits: 0,
}
let items = [{
  name: '4x-cut',
  modifier: 150,
  description: 'Attack 4 times'
}, {
  name: 'Shrapnel',
  modifier: 50,
  description: 'add shrapnel to grenade'
}, {
  name: 'Magic Source',
  modifier: 100,
  description: 'MP up'
}
]
function giveitem(num) {
  if (num = 1) {
    cloud.items.push(items[0])
  }
  else if (num = 2) {
    cloud.items.push(items[1])
  }
  else if (num = 3) {
    cloud.items.push(items[2])
  }
}

function addMods() {
  let mod = 0
  for (let i = 0; i < cloud.items.length; i++) {
    mod += cloud.items[i].modifier
  }
  return mod;
}

function attack() {
  sephiroth.health -= cloud.attacks.attack + addMods();
  draw()
}

function grenade() {
  sephiroth.health -= cloud.attacks.grenade + addMods();
  draw()
}

function bolt3() {
  sephiroth.health -= cloud.attacks.bolt3 + addMods();
  draw()
}


function draw() {
  document.getElementById('health').innerText = `${sephiroth.health}`
}
draw()