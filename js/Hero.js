import { Personnage } from './Personnage.js'

export class Hero extends Personnage {
    constructor(name, hp, dammage, armor) {
        super(name, hp, dammage)
        this.armor = armor
    }

    bonusHp() {
        let bonushp = Math.round(Math.random() * 5);

        if (this.survive() === true && this.hp > 0) {
            if (bonushp === 1) {
                this.hp += 50

            }
        }

        else {
            this.survive()
        }
    }

    bonusArmor() {
        let bonusarmor = Math.round(Math.random() * 3);
        console.log(bonusarmor)
        if (this.survive() === true && this.hp > 0) {
            if (bonusarmor === 1) {
                this.armor += 20

            }
        }

        else {
            this.survive()
        }
    }

    sustain(attack) {
        let dammage = attack.dammage - this.armor

        if (this.armor > 0) {
            this.armor -= attack.dammage

            if (this.armor > 0) {
                console.log(`il reste encore ${this.armor} d'armure à ${this.name}`)
            }

            if (Math.sign(this.armor) === -1 || this.armor === 0) {
                console.log(`${this.name} n'a plus d'armure !`)
                this.armor = 0
            }
        }

        if (this.armor <= 0) {
            this.hp -= dammage
        }
        console.log(`il reste ${this.hp} point de vie à ${this.name}`)
        this.survive()
    }
}