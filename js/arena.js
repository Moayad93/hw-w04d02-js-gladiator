'use strict';

import Gladiator from './gladiator.js';

export default class Arena {

  constructor(name, gladiators = []) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    this.name = capitalizedName;
    this.gladiators = gladiators;
  }

  addGladiator(gladiator) {
    (this.gladiators.length < 2) ? this.gladiators.push(gladiator) : false;
  }

  fight() {
    switch (true) {
      case
        (this.gladiators[0].weapon === 'trident' && this.gladiators[1].weapon === 'spear') ||
        (this.gladiators[0].weapon === 'spear'   && this.gladiators[1].weapon === 'club') ||
        (this.gladiators[0].weapon === 'club'    && this.gladiators[1].weapon === 'trident') :
          console.log(`By their ${this.gladiators[0].weapon}, ${this.gladiators[0].name} eliminated ${this.gladiators[1].name}.`);
          this.gladiators.pop();
          break;
      case
        (this.gladiators[1].weapon === 'trident' && this.gladiators[0].weapon === 'spear') ||
        (this.gladiators[1].weapon === 'spear'   && this.gladiators[0].weapon === 'club') ||
        (this.gladiators[1].weapon === 'club'    && this.gladiators[0].weapon === 'trident') :
          console.log(`By their ${this.gladiators[1].weapon}, ${this.gladiators[1].name} eliminated ${this.gladiators[0].name}.`);
          this.gladiators.shift();
          break;
      case
        (this.gladiators[0].weapon === this.gladiators[1].weapon) :
          this.gladiators = [];
          break;
    }
  }
}