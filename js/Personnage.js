export class Personnage {
    constructor(name, hp, dammage) {
        this.name = name
        this.hp = hp
        this.dammage = dammage
    }

    attack(victim) {
        console.log(`${this.name} inflige ${this.dammage} de point de dégat à ${victim.name}.`)
        victim.sustain(this)
    }

    sustain(attack) {
        this.hp -= attack.dammage
        console.log(`il reste ${this.hp} point de vie à ${this.name}`)
        this.survive()
    }

    survive() {
        if (this.hp <= 0) {
            console.log(`${this.name} est mort`)
            this.hp = 0
            return true

        }
        else {
            return false
        }
    }
}
