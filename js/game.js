import { Personnage } from './Personnage.js'
import { Hero } from './Hero.js'
import { Minion } from './Minion.js'

let denilson = new Hero('denilson', 200, 250, 0)
let minion = new Minion('minion', 500, 100)

let name = document.querySelectorAll('h4')
let life = document.querySelectorAll('.badge-success')
let dammage = document.querySelectorAll('.badge-danger')
let armor = document.querySelector('.badge-primary')
let attack = document.querySelector('button')
let imgs = document.querySelectorAll('img');
console.log(imgs);

let elementaudio = document.querySelector('#guile-song').volume = 0.1;


name[0].innerHTML = denilson.name
name[1].innerHTML = minion.name

life[0].innerHTML = denilson.hp
life[1].innerHTML = minion.hp

dammage[0].innerHTML = denilson.dammage
dammage[1].innerHTML = minion.dammage

armor.innerHTML = denilson.armor


attack.addEventListener('click', () => {

    let gainHp = Math.round(Math.random() * 5)
    let gainArmor = Math.round(Math.random() * 3)

    imgs[0].setAttribute('src', 'img/sonic-guile.gif')
    imgs[0].setAttribute('style', 'width:200%;margin-top:35px')

    imgs[5].setAttribute('src', 'img/charge-blanka.gif')
    imgs[5].setAttribute('style', 'width:200%;margin-top:72px')
    denilson.bonusArmor()
    denilson.bonusHp()

    denilson.attack(minion)
    minion.attack(denilson)

    life[0].innerHTML = denilson.hp
    life[1].innerHTML = minion.hp

    dammage[0].innerHTML = denilson.dammage
    dammage[1].innerHTML = minion.dammage

    armor.innerHTML = denilson.armor
})