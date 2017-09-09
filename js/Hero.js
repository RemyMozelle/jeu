import { Personnage } from './Personnage.js'

export class Hero extends Personnage {
    constructor(name, hp, dammage, armor) {
        super(name, hp, dammage)
        this.armor = armor
    }

    bonusHp() {
        console.log(`${this.name} gagne 50 point de vie !`)
        this.hp += 50
    }

    bonusArmor() {
        console.log(`${this.name} gagne 20 d'armure !`)
        this.armor += 20
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