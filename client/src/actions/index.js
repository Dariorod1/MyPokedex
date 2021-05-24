import axios from "axios";

export const GETPOKEMONS = "GET_POKEMONS";
export const GETNAME = "GET_NAME";
export const GETTYPES = "GET_TYPES";
export const GETDETAILS = "GET_DETAILS";
export const GETCREATE = "GET_CREATE";
export const ADDPOKEMON = "ADD_POKEMON";
export const POKEMONS_ORDER = "POKEMONS_ORDER"
export const POKEMONS_ORIGIN = "POKEMON_ORIGIN"
export const GETAPI = "GET_API"
export const GET_POKEMONS_TYPES = "GET_POKEMONS_TYPES"

export const getPokemons = () => {
    return function(dispatch) {
        axios
            .get("http://localhost:3002/pokemons")
            .then((r) => r.data)
            .then((data) => {
                dispatch({
                    type: GETPOKEMONS,
                    payload: data
                });
            });
    };
};

export const GetName = (nombre) => {
    return (dispatch) => {
        axios.get(`http://localhost:3002/pokemons?name=${nombre}`)
            .then(r => r.data)
            .then(data => {
                dispatch({
                    type: GETNAME,
                    payload: data
                })
            })
    }
}


export const GetTypes = () => {
    return (dispatch) => {
        axios
            .get("http://localhost:3002/types")
            .then((r) => r.data)
            .then((data) => {
                dispatch({
                    type: GETTYPES,
                    payload: data,
                });
            });
    };
};

export const getDetails = (id) => {
    return function(dispatch) {
        axios
            .get(`http://localhost:3002/pokemons/${id}`)
            .then((r) => r.data)
            .then((data) => {
                dispatch({
                    type: GETDETAILS,
                    payload: data,
                });
            });
    };
};

export const getPokemonType = (type) => {
    return function(dispatch) {
        axios
            .get(`http://localhost:3002/pokemons/tipos/${type}`)
            .then((r) => r.data)
            .then((data) => {
                dispatch({
                    type: GET_POKEMONS_TYPES,
                    payload: data,
                });
            });
    };
};

export const GetCreate = () => {
    return (dispatch) => {
        axios.get(`http://localhost:3002/pokemons/creados`)
            .then(r => r.data)
            .then(data => {
                dispatch({
                    type: GETCREATE,
                    payload: data
                })
            })
    }
}

export const GetApi = () => {
    return (dispatch) => {
        axios.get(`http://localhost:3002/pokemons/api`)
            .then(r => r.data)
            .then(data => {
                dispatch({
                    type: GETAPI,
                    payload: data
                })
            })
    }
}

export const addPokemons = ({ name, hp, attack, defense, speed, height, weight, type, sprite }) => {

    return (dispatch) => {
        dispatch({ type: ADDPOKEMON });
        axios({
            method: 'post',
            url: `http://localhost:3002/pokemons/`,
            data: {
                name,
                hp,
                attack,
                defense,
                speed,
                height,
                weight,
                type,
                sprite,
            },
        }).catch(e => dispatch(e))
    }
}

export const setPokemonsOrder = (order) => (dispatch) => {
    dispatch({ type: 'POKEMONS_ORDER', payload: order });
};