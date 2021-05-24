import './App.css';
import React , { useEffect, useState} from 'react'
import Navbar from './components/Nav/NavBar'
import Home from './components/Home/Home'
import LandingPage from './components/LandingPage/LandingPage'
import SearchBar from './components/SearchBar/SearchBar'
import axios from 'axios'
import {Route} from 'react-router-dom';
import Pokemon from './components/Pokemon/Pokemon';
import Creation from './components/Creation/Creation';
import PokemonDetail from "./components/PokemonDetail/PokemonDetail"
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <Route exact path='/' component={LandingPage} />
      <Route  path='/' component={Navbar} />
      <Route path='/creation' component ={Creation}/>
      <Route exact path="/pokemons/:id" component={PokemonDetail} />
      <Route path='/home' component={SearchBar} />
      <Route path='/home' component={Home} />
      <Route  path='/home' component={Footer} />
    </>
  );
}

export default App;
