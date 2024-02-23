let warrior1 = new WarriorAxe("Cratos",15,120);
console.log(warrior1);
let warrior2 = new WarriorSword("Bravus",15,900);
console.log(warrior2);
let warrior3 = new WarriorSpear("Achille", 30, 150);
console.log(warrior3);

//console.log(warrior1.name+" attack le "+ warrior2.name + " et il lui laisse "+ warrior1.attack(warrior2)+ " de vie") ;


while (warrior1.isAlive() && warrior2.isAlive() ){
    console.log(warrior1.name+" attack " +warrior2.name + " et il lui laisse " + warrior1.attack(warrior2) + " de vie");
    console.log(warrior2.name+" attack "+warrior1.name + " et il lui laisse " + warrior2.attack(warrior1) + " de vie");
} ;
    
 if(warrior1.isAlive() == false  && warrior1.life == 0){
    console.log(warrior2.name + " winssss");
}else if(warrior2.isAlive() == false && warrior2.life == 0){
    console.log(warrior1.name +" winsss")
}

