export class Personnage {
    constructor(name, hp, dammage) {
        this.name = name
        this.hp = hp
        this.dammage = dammage
    }

    attack(victim) {
        /* console.log(`${this.name} inflige ${this.dammage} de point de dégat à ${victim.name}.`) */
        victim.sustain(this)
    }

    sustain(attack) {
        this.hp -= attack.dammage
        this.survive()
        /* if(attack.critChance === true){
            let normalDommage = attack.dammage;
            console.log(normalDommage);
        }
        else{ */
            
            /* console.log(`il reste ${this.hp} point de vie à ${this.name}`) */
            
        /* } */
        
    }

    /* critDommage(){
        let critChance = Math.round(Math.random() * 5);
        
        if(critChance === 1){
            console.log('test');
            return true;
        }
        else{
            console.log('test');
            return false;
        }
    } */

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
