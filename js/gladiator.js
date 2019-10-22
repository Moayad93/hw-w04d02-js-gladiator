'use strict';

import Arena from './arena.js';

export default class Gladiator {

  constructor(name, weapon) {

    /*
      Make it so that you cannot assign a Gladiator an invalid weapon
      (i.e., anything aside from Spear, Club or Trident.)
      That means running code like new Gladiator("Jesse", "Taco") would throw an error
    */
    if (weapon.toLowerCase() === 'spear' || weapon.toLowerCase() === 'club' || weapon.toLowerCase() === 'trident') {
      this.name   = name.toLowerCase();
      this.weapon = weapon.toLowerCase();
    } else {
      throw 'You cannot assign a Gladiator an invalid weapon!';
    }
  }
}