'use strict';

// import Gladiator from './gladiator.js';

export default class Arena {

  // Capitalize the name of the arena and assign it. The arena has gladiators.
  constructor(name, gladiators = []) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    this.name = capitalizedName;
    this.gladiators = gladiators;
  }

  // You can add a gladiator to the arena. You cannot exceed two gladiators in one arena
  addGladiator(gladiator) {
    (this.gladiators.length < 2) ? this.gladiators.push(gladiator) : false;
  }

  // You can remove the eliminated gladiator based on their name.
  removeGladiator(gladiator) {
    const indexOfGladiator = this.gladiators.indexOf(gladiator);
    this.gladiators.splice(indexOfGladiator, 1);
  }

  fight() {
    switch (true) {
      // #1st Scenario: Check if the first gladiator is th winner.
      case
        (this.gladiators[0].weapon === 'trident' && this.gladiators[1].weapon === 'spear') ||
        (this.gladiators[0].weapon === 'spear'   && this.gladiators[1].weapon === 'club')  ||
        (this.gladiators[0].weapon === 'club'    && this.gladiators[1].weapon === 'trident') :
          console.log(`By their ${this.gladiators[0].weapon}, ${this.gladiators[0].name} eliminated ${this.gladiators[1].name}.`);
          // this.gladiators.pop();
          this.removeGladiator(this.gladiators[1]);
          break;
      // #2nd Scenario: Check if the second gladiator is th winner.
      case
        (this.gladiators[1].weapon === 'trident' && this.gladiators[0].weapon === 'spear') ||
        (this.gladiators[1].weapon === 'spear'   && this.gladiators[0].weapon === 'club')  ||
        (this.gladiators[1].weapon === 'club'    && this.gladiators[0].weapon === 'trident') :
          console.log(`By their ${this.gladiators[1].weapon}, ${this.gladiators[1].name} eliminated ${this.gladiators[0].name}.`);
          // this.gladiators.shift();
          this.removeGladiator(this.gladiators[0]);
          break;
      // #3rd Scenario: In case of having the same weapon, all gladiators were eliminated.
      case
        (this.gladiators[0].weapon === this.gladiators[1].weapon) :
          console.log(`Both gladiators were eliminated, they both have ${this.gladiators[1].weapon}s.`);
          this.gladiators = [];
          break;
    }
  }
}