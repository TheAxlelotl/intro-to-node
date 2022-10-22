const superheroes = require('superheroes');
const supervillains = require('supervillains');

const mySuperhero = superheroes.random();
const mySupervillain = supervillains.random();

console.log(`Tonight, on Smackdown!! Who will win? ${mySuperhero} or ${mySupervillain}?`);