const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
    before(() =>
        conn.authenticate().catch((err) => {
            console.error('Unable to connect to the database:', err);
        })
    );
    beforeEach(() => Pokemon.sync({ force: false }));
    describe('Validators', () => {
        describe('Nombre', () => {
            it('Deberia arrojar un error si el nombre es null', async() => {
                try {
                    await Pokemon.create({});
                } catch (err) {
                    expect(err.message).to.equal(
                        'notNull Violation: It requires a valid name'
                    );
                }
            });
        });
        describe('Ataque', () => {
            it('No deberias poder crear un pokemon si donde espera un entero recibe un string', async() => {
                try {
                    await Pokemon.create({
                        name: 'Metapod',
                        attack: 'This is invalid data',
                    });
                } catch (err) {}
                const pokemon = await Pokemon.findOne({
                    where: {
                        name: 'Metapod',
                    },
                });
                expect(pokemon).to.equal(null);
            });
        });
        describe('Crear un nuevo Pokemon', () => {
            describe('Nuevo Pokemon', () => {
                it('Pokemon creado correctamente', async() => {
                    await Pokemon.create({ name: 'Charizard', attack: 120 });
                    const pokemon = await Pokemon.findOne({
                        where: {
                            name: 'Charizard',
                        },
                    });
                    expect(pokemon.name).to.equal('Charizard');
                    expect(pokemon.attack).to.equal(120);
                });
            });
        });
    });
});