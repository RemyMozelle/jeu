import { Personnage } from './Personnage.js'
import { Hero } from './Hero.js'
import { Minion } from './Minion.js'

let denilson = new Hero('denilson', 200, 25, 0)
let minion = new Minion('minion', 30, 100)

let tour = 0

while (tour < 2) {
    let bonusHp = Math.round(Math.random() * 5);
    let bonusArmor = Math.round(Math.random() * 3);

    if (bonusHp === 1) {
        denilson.bonusHp()
    }

    if (bonusArmor === 1) {
        denilson.bonusArmor()
    }
    if(denilson.survive() === false){ console.log('NICE');}
    if(minion.survive() === false){ console.log('NICE');}
    denilson.attack(minion)
    minion.attack(denilson)
    tour++
}

console.log(denilson, minion);