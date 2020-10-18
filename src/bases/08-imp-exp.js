//import { heroes } from './data/heroes'
import { heroes } from '../data/heroes'





export const getHeroeById = (id) => heroes.find(personaje => personaje.id === id);

// console.log(getHeroeById(1));


export const getHeroesByOwner = (owner) => heroes.filter(personaje => personaje.owner === owner);


// console.log(getHeroesByOwner('DC'));