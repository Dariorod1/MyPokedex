const getAllApi = require('./getAllApi');
const getAllApp = require('./getAllApp');

const getAllPokemons = async() => {
    let pokeApi = await getAllApi;
    let pokeApp = await getAllApp();
    let pokeTotal = pokeApp.concat(pokeApi);
    return pokeTotal;
};

module.exports = getAllPokemons;