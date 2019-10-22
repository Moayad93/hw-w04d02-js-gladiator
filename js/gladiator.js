'use strict';

// import Arena from './arena.js';

export default class Gladiator {

  constructor(name, weapon) {

    // You cannot assign a Gladiator an invalid weapon (i.e., anything aside from Spear, Club or Trident).
    if (weapon.toLowerCase() === 'spear' || weapon.toLowerCase() === 'club' || weapon.toLowerCase() === 'trident') {
      this.name   = name.toLowerCase();
      this.weapon = weapon.toLowerCase();
    } else {
      throw 'You cannot assign a Gladiator an invalid weapon!';
    }
  }
}