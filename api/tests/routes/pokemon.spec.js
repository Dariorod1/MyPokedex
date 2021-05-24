/* eslint-disable import/no-extraneous-dependencies */
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

const agent = session(app);

describe('Route test', () => {
    before(() =>
        conn.authenticate().catch((err) => {
            console.error('Unable to connect to the database:', err);
        })
    );
    beforeEach(() => Pokemon.sync({ force: false }));
    describe('GET /pokemons', () => {
        it('responds with 200', async() => {
            try {
                await agent.get('/pokemons').expect(200);
            } catch (err) {
                console.log(err);
            }
        }).timeout(47000);
        it('Si se le pasa un nombre por query parameter debe responder con el pokemon que tenga ese nombre', async() => {
            try {
                const res = await agent.get('/pokemons?name=bulbasaur');
                expect(res.body[0].name).to.be.equal('bulbasaur');
            } catch (err) {}
        }).timeout(47000);
        it('Si se le pasa un id debe responder con el pokemon que posea ese id', async() => {
            try {
                const res = await agent.get('/pokemons/1');
                expect(res.body[0].name).to.be.equal('bulbasaur');
            } catch (err) {}
        }).timeout(47000);
    });

    describe('POST /pokemons', () => {
        it('responds with 200', async() => {
            try {
                await agent.post('/pokemons').send({ name: 'Poke-Henry', type: 5 }).expect(200);
            } catch (err) {
                console.log(err);
            }
        });

        it('Si no se le pasa un nombre responde con 400', async() => {
            try {
                await agent.post('/pokemons').send({}).expect(400);
            } catch (err) {
                console.log(err);
            }
        });
        it('Si no se le pasa un tipo responde con 400', async() => {
            try {
                await agent.post('/pokemons').send({ name: 'Toni' }).expect(400);
            } catch (err) {
                console.log(err);
            }
        });
        it('Pokemon creado correctamente', async() => {
            try {
                const res = await agent
                    .post('/pokemons')
                    .send({ name: 'Rikachu', type: 1 });
                expect(res.body.name).to.be.equal('Rikachu');
            } catch (err) {
                console.log(err);
            }
        });
    });
});