import React from 'react';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import NavBar from './NavBar';

configure({ adapter: new Adapter() });

describe('<Nav />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow( < NavBar / > )
    })

    it('Deberia renderizar Tres <Link />', () => {
        expect(wrapper.find(Link)).toHaveLength(3);
    });
    it('El primer Link debe tener el texto "Pokedex App" y cambiar la ruta hacia "/home".', () => {
        //el orden donde declaran los Links es importante
        expect(wrapper.find(Link).at(0).prop('to')).toEqual('/home');
        // Tiene que ser literal! ojo con los espacios.
        expect(wrapper.find(Link).at(0).text()).toEqual('Pokedex App');
    });
    it('El segundo Link debe tener el texto "Inicio" y cambiar la ruta hacia "/home"', () => {
        expect(wrapper.find(Link).at(1).prop('to')).toEqual('/home');
        // Tiene que ser literal! ojo con los espacios.
        expect(wrapper.find(Link).at(1).text()).toEqual('Inicio');
    });
    it('El segundo Link debe tener el texto "Crea Tu Pokemon" y cambiar la ruta hacia "/creation"', () => {
        expect(wrapper.find(Link).at(2).prop('to')).toEqual('/creation');
        // Tiene que ser literal! ojo con los espacios.
        expect(wrapper.find(Link).at(2).text()).toEqual('Crea Tu Pokemon');
    });
})