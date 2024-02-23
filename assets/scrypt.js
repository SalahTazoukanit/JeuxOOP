class Warrior {

    constructor(name,power,life){
        this.name = name ;
        this.power = power;
        this.life = life;
    }
    
    attack(opponent){   
        return opponent.life = opponent.life - this.power ; //joan.attack(leon)        
    }
    isAlive(){
        if (this.life > 0) {
            return true ;
        }else{
            return false ;
        }
    }
}
class WarriorAxe extends Warrior{
    constructor(name,power, life){
        super (name,power,life);
        this.powerBase = this.power;
    }
    attack(opponent){
        if(opponent instanceof WarriorSword){
            this.power = this.powerBase*2;
        }
        super.attack(opponent);
        if (opponent.life < 0) {
            opponent.life = 0
        }
        return opponent.life
    }
}
class WarriorSword extends Warrior{
    constructor(name,power, life){
        super (name,power,life);
        this.powerBase = this.power;
    }
    attack(opponent){
        if(opponent instanceof WarriorSpear){
            this.power = (this.powerBase)*2;
            return super.attack(opponent);
        }else{
            return super.attack(opponent);
        }
    }
}

class WarriorSpear extends Warrior{
    constructor(name,power, life){
        super (name,power,life);
        this.powerBase = this.power;
    }
    attack(){
        if(opponent instanceof WarriorAxe){
            this.power = (this.powerBase)*2;
            return super.attack(opponent);
        }else{
            return super.attack(opponent);
        }
    }
}





// - `WarriorAxe` : si le type de `opponent` est `WarriorSword`, multiplier `power` par deux
// - `WarriorSword` : si le type de `opponent` est `WarriorSpear`, multiplier `power` par deux
// - `WarriorSpear` : si le type de `opponent` est `WarriorAxe`, multiplier `power` par deux

// class Heros extends Personnage {
//     constructor(nom, force, pouvoir) {
//       super(nom, force);
//       this.pouvoir = pouvoir;
//     }
  
//     utiliserPouvoir() {
//       return `${this.nom} utilise son pouvoir de ${this.pouvoir}!`;
//     }
  
//     attaquer() {
//       return super.attaquer() + " " + this.utiliserPouvoir();
//     }
//   }