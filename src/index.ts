import {damage, Pokemon_old} from '../pokemon_old';

const pagalou = new Pokemon_old("Pagalou", 95, 15, 10);
const plou = new Pokemon_old("Plou", 95, 15, 95);

console.log(pagalou);
console.log(damage(plou, pagalou));