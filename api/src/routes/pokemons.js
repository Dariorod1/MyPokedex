const { Router } = require('express');
const { Pokemon, Type } = require('../db');
const { getPokemonDetail, getAllPokemons, getAllApp, getAllApi, GetPokemonType } = require('../controllers');
const router = Router();

router.get('/api', async(req, res) => {
    let pokes = await getAllApi
    res.status(200).send(pokes)
})

router.get('/', async(req, res) => {
    const { name } = req.query;
    let pokeTotal = await getAllPokemons();
    if (name) {
        let pokeName = await getPokemonDetail('GET_NAME', name);
        pokeName.length ?
            res.status(200).send(pokeName) :
            res.status(404).send('Pokemon not found');
    }
    return res.status(200).send(pokeTotal);
});

router.get('/creados', async(req, res) => {
    const pokeCreados = await Pokemon.findAll({ include: Type });
    res.send(pokeCreados)

    const pokes = pokeCreados.map(r => {
        let tipos = r.dataValues.Types.map((t) => t.name);

        let name = {
            name: r.dataValues.name,
            id: r.dataValues.id,
            sprite: r.dataValues.sprite,
            attack: r.dataValues.attack,
            tipos
        }
        return name
    })
    pokes.sort(function(a, b) {
        return b.id - a.id;
    })
    pokes
    res.json(pokes)
})

router.get('/:id', async(req, res) => {
    const { id } = req.params;
    if (id) {
        let pokeId = await getPokemonDetail('GET_ID', id);
        pokeId.length ?
            res.status(200).send(pokeId) :
            res.status(404).send('Pokemon not found');
    }
});

router.get('/tipos/:type', async(req, res) => {
    const { type } = req.params;
    let pokes = await getAllPokemons()
    let filtrados = await GetPokemonType(type, pokes)
    res.status(200).send(filtrados)
});

router.post('/', async(req, res) => {
    const {
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        type,
        sprite,
    } = req.body;
    if (!name || !type)
        return res.status(400).send('Error: Falta nombre y tipo ');
    const createPokemon = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        sprite,
    });
    await createPokemon.setTypes(type);
    return res.status(200).send(createPokemon);
});

module.exports = router;