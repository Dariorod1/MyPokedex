const { Router } = require('express');
const { Type } = require('../db');
const router = Router();
const axios = require('axios');
// router.get('/', async(req, res) => {
//     let totalTypes = await Type.findAll();
//     return res.status(200).send(totalTypes);
// });


router.get('/', async(req, res) => {
    const type = await axios.get("https://pokeapi.co/api/v2/type").catch((e) => {
        return res.status(404).send("error!!");
    });
    const names = type.data.results.map((n) => n.name);

    for (let i = 0; i < names.length; i++) {
        await Type.findOrCreate({
            where: { name: names[i] },
        });
    }
    const types = await Type.findAll();
    const enviar = types.slice(0, -2)
    console.log(enviar.map((t) => t.name))
    res.json(enviar.map((t) => t.name));
});

module.exports = router;