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
        this.survive()
        console.log('-----------------------------------------------------')
        /* console.log(`il reste ${this.hp} point de vie à ${this.name} `) */
    }

    survive() {
        if (this.hp === 0 || Math.sign(this.hp) === -1) {
            console.log('-----------------------------------------------------')
            console.log(`${this.name} est mort`); 
            this.hp = 0;
            return true;
        }
        else {
            console.log('-----------------------------------------------------')
            /* console.log(`${this.name} à survécu à l'attaque !`); */
            return false;
        }
    }
}
