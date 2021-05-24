const getAllPokemons = require('./getAllPokemons');

const getPokemonDetail = async(situation, element) => {
    let pokeTotal = await getAllPokemons();

    switch (situation) {
        case 'GET_NAME':
            return pokeTotal.filter((el) => el.name === element);

        case 'GET_ID':
            return pokeTotal.filter((el) => el.id.toString() === element);
        case 'GET_TYPE':
            return pokeTotal.Types.filter((el) => el.name === element)
        default:
            return pokeTotal;
    }
};

module.exports = getPokemonDetail;