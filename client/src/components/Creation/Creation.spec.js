import React,{useState} from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { ADDPOKEMON,addPokemons } from '../../actions/index';

import CreationDefault, { Creation } from './Creation';

configure({adapter: new Adapter()});

describe('<AddPokemon />', () => {

    describe('Estructura', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<Creation />);
        })
        it('Renderiza un <form>', () => {
            expect(wrapper.find('form')).toHaveLength(1)
        })
        it('Renderiza un label con el texto igual a "Name"', () => {
            expect(wrapper.find('label').at(0).text()).toEqual('💬Name:');
        })
        it('Renderiza un input con la propiedad "name" igual a "name"', () => {
            expect(wrapper.find('input[name="name"]')).toHaveLength(1);
        })
        it('Renderiza un label con el texto igual a "HP', () => {
            expect(wrapper.find('label').at(1).text()).toEqual('❤️HP:');
        })
        it('Renderiza un input con la propiedad "name" igual a "health"', () => {
            expect(wrapper.find('input[name="hp"]')).toHaveLength(1);
        })
        it('Renderiza un label con el texto igual a "Attack', () => {
            expect(wrapper.find('label').at(2).text()).toEqual('⚔️Attack:');
        })
        it('Renderiza un input con la propiedad "name" igual a "attack"', () => {
            expect(wrapper.find('input[name="attack"]')).toHaveLength(1);
        })
        it('Renderiza un label con el texto igual a "Defense', () => {
            expect(wrapper.find('label').at(3).text()).toEqual('🛡️Defense:');
        })
        it('Renderiza un input con la propiedad "name" igual a "defense"', () => {
            expect(wrapper.find('input[name="defense"]')).toHaveLength(1);
        })
        it('Renderiza un label con el texto igual a "Speed', () => {
            expect(wrapper.find('label').at(4).text()).toEqual('💨Speed:');
        })
        it('Renderiza un input con la propiedad "name" igual a "speed"', () => {
            expect(wrapper.find('input[name="speed"]')).toHaveLength(1);
        })
        it('Renderiza un label con el texto igual a "Height', () => {
            expect(wrapper.find('label').at(5).text()).toEqual('📏Height:');
        })
        it('Renderiza un input con la propiedad "name" igual a "height"', () => {
            expect(wrapper.find('input[name="height"]')).toHaveLength(1);
        })
        it('Renderiza un label con el texto igual a "Weight', () => {
            expect(wrapper.find('label').at(6).text()).toEqual('⚖️Weight:');
        })
        it('Renderiza un input con la propiedad "name" igual a "weight"', () => {
            expect(wrapper.find('input[name="weight"]')).toHaveLength(1);
        })
    })
    // describe('Manejo de inputs con estado', () => {
    //     let wrapper, useState, useStateSpy;
    //     beforeEach(() => {
    //         useState = jest.fn();
    //         useStateSpy = jest.spyOn(React,'useState')
    //         useStateSpy.mockImplementation((init) => [init, useState]);
    //         wrapper = shallow(<Creation/>)
    //     });
    //     describe("Title input", () => {

    //       it('El form deberia cambiar de estado cuando escriban en el input de title', () => {
    //           // deberías tener un único estado, no uno por cada input
    //           wrapper.find('input[name="name"]').simulate('change',{target:{name:'name',value:'pika'} });
    //           expect(useState).toHaveBeenCalledWith({
    //             "name": 'pika',
    //             "hp": '',
    //             "attack": '',
    //             "defense": '',
    //             "speed": '',
    //             "height": '',
    //             "weight": '',
    //             "type": [],
    //             "sprite": ""
    //           });
    //       });
    //     });
    // });
    

})
