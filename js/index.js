'use strict';

import Gladiator from './gladiator.js';
import Arena from './arena.js';

/*
  Create a Gladiator class that has the following properties...
  a name
  a weapon (one of Spear, Club, Trident)
  Once defined, you should be able to do the following...
*/
// const max1 = new Gladiator('Maximus', 'Trident');
// console.log(max1.name); // 'Maximus'
// console.log(max1.weapon); // 'Trident'

// // An arena has a name
// const colosseum1 = new Arena('Colosseum');
// console.log(colosseum1.name); // => Colosseum

// // The name should be capitalized
// const colosseum2 = new Arena('megalopolis');
// console.log(colosseum2.name); // => Megalopolis

// // An arena can have gladiators
// const colosseum3 = new Arena('Colosseum');
// console.log(colosseum3.gladiators); // => []

// // You can add a gladiator to the arena
// const max2 = new Gladiator('Maximus', 'Trident');
// const colosseum4 = new Arena('Colosseum');
// colosseum4.addGladiator(max2);
// console.log(colosseum4.gladiators); // => [Gladiator]

// // The arena cannot  have more than 2 gladiators in it at a time
// const max3 = new Gladiator('Maximus','Trident');
// const titus = new Gladiator('Titus','club');
// const andronicus = new Gladiator('Andronicus','One of Spear');
// const colosseum5 = new Arena('Colosseum');

// colosseum5.addGladiator(max3);
// colosseum5.addGladiator(titus);
// colosseum5.addGladiator(andronicus);

// console.log(colosseum5.gladiators); // => 2

// If there are two gladiators in the arena, you can call a fight method that results in the elimination of one of the gladiators from the arena.

/*
Winning conditions:
Trident beats Spear, Spear beats Club, Club beats Trident.
If the two gladiators have the same weapon, they are both eliminated.
*/
const max4 = new Gladiator('Maximus', 'club');
const titus = new Gladiator('Titus', 'club');
const colosseum6 = new Arena('Colosseum');

colosseum6.addGladiator(max4);
colosseum6.addGladiator(titus);
colosseum6.fight();

console.log(colosseum6.gladiators); // => [max]