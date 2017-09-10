import { Personnage } from './Personnage.js'
import { Hero } from './Hero.js'
import { Minion } from './Minion.js'

let denilson = new Hero('denilson', 200, 25, 0)
let minion = new Minion('minion', 500, 25)

let name = document.querySelectorAll('h4')
let life = document.querySelectorAll('.badge-success')
let dammage = document.querySelectorAll('.badge-danger')
let armor = document.querySelector('.badge-primary')
let attack = document.querySelector('button')

name[0].innerHTML = denilson.name
name[1].innerHTML = minion.name

attack.addEventListener('click', (e) => {
    denilson.attack(minion);

    life[0].innerHTML = denilson.hp
    life[1].innerHTML = minion.hp

    dammage[0].innerHTML = denilson.dammage
    dammage[1].innerHTML = minion.dammage

    armor.innerHTML = denilson.armor
    console.log(e);
})