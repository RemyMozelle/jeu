import { Personnage } from './Personnage.js'
import { Hero } from './Hero.js'
import { Minion } from './Minion.js'

let denilson = new Hero('denilson', 200, 25, 100)
let minion = new Minion('minion', 300, 25)


while (denilson.survive() === false && denilson.survive() === false) {

    let gainHp = Math.round(Math.random() * 5)
    let gainArmor = Math.round(Math.random() * 3)

    if(denilson.hp > 0){
        denilson.attack(minion)
    }

    if(minion.hp > 0){
        minion.attack(denilson)
    }
    
    if (minion.hp <= 0 || denilson.hp <= 0) {
        break
    }

    console.log(`
    {%---------- % NOUVEAU ROUND % ----------%}
    `)
}