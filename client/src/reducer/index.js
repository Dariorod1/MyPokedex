import { ADDPOKEMON } from "../actions/index";
import { GETCREATE } from "../actions/index";
import { GETDETAILS } from "../actions/index";
import { GETNAME } from "../actions/index";
import { GETPOKEMONS } from "../actions/index";
import { GETTYPES, GETAPI } from "../actions/index";
import { POKEMONS_ORDER, GET_POKEMONS_TYPES } from '../actions/index'
export const GetPokemonOrder = (order, array) => {

    switch (order) {
        case 'A-Z':
            return array.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                } else {
                    return -1;
                }
            });
        case 'Z-A':
            return array.sort((a, b) => {
                if (a.name < b.name) {
                    return 1;
                } else {
                    return -1;
                }
            });
        case 'Más Ataque':
            return array.sort((a, b) => {
                if (a.attack < b.attack) {
                    return 1;
                } else {
                    return -1;
                }
            });
        case 'Menos Ataque':
            return array.sort((a, b) => {
                if (a.attack > b.attack) {
                    return 1;
                } else {
                    return -1;
                }
            });

        default:
            return array;
    }
};

export const GetPokemonType = (type, array) => {
    if (type === 'All') return array;
    let newArray = array.filter((el, i) =>
        el.Types.length ?
        el.Types[0].name === type ?
        true :
        el.Types.length > 1 ?
        el.Types[1].name === type ?
        true :
        false :
        false :
        false
    );
    return newArray;
};

export const GetPokemonsViews = (array, min, max) => {
    if (!min && !max) {
        return array.slice(0, 40);
    }
    return array.slice(min, max);
};

const initialState = {
    pokemonDetails: [],
    pokemons: [],
    pokemonName: [],
    loading: false,
    pokemonHome: [],
    types: [],
    pokemonCreate: [],
    pokemonFilter: 'All',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETPOKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                pokemonHome: action.payload
            };

        case GETDETAILS:
            return {
                ...state,
                pokemonDetails: action.payload,

                loading: false,
            };

        case GETTYPES:
            return {
                ...state,
                types: action.payload,
            };

        case GETNAME:
            return {
                ...state,
                pokemonHome: action.payload,
                loading: true,
            };
        case GETCREATE:
            return {
                ...state,
                pokemonHome: action.payload,
            };
        case GETAPI:
            return {
                ...state,
                pokemonHome: action.payload
            }
        case ADDPOKEMON:
            return {
                ...state,
            };

        case POKEMONS_ORDER:
            return {
                ...state,
                pokemonHome: GetPokemonsViews(GetPokemonOrder(action.payload, state.pokemonHome)),
                pokemonFilter: action.payload

            };
        case GET_POKEMONS_TYPES:
            return {
                ...state,
                pokemonHome: action.payload

            };
        default:
            return {...state };
    }
};

export default rootReducer;