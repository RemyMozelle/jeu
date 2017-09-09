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
        let normalDommage = this.dammage
        let critical = this.critDommage()

        if (critical === true) {
            let criticalDommage = normalDommage * 2
            console.log(`${this.name} subi une attaque CRITIQUE de ${attack.name}`);
            this.hp -= criticalDommage
            console.log(`il reste ${this.hp} point de vie à ${this.name}`)
            this.survive()
        }

        if (critical === false) {
            console.log(`${this.name} subi une attaque de ${attack.name}`);
            this.hp -= normalDommage
            console.log(`il reste ${this.hp} point de vie à ${this.name}`)
            this.survive()
            
        }
    }

    critDommage() {
        let critChance = Math.round(Math.random() * 5)

        return critChance === 1 ? true : false
    }

    survive() {
        if (this.hp <= 0) {
            this.hp = 0

            console.log(`${this.name} est MORT`)
            return true
        }

        else {
            return false
        }
    }
}
