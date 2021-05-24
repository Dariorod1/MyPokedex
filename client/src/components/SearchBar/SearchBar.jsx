import React, { useState,useEffect} from 'react';
import { useDispatch,useSelector} from 'react-redux'
import  '../SearchBar/SeachBar.css'
import {GetName,getPokemons} from '../../actions/index'
import Pokemon from '../Pokemon/Pokemon'
import PokemonName from '../PokemonName/PokemonName'
import Filtros from '../Filtros/Filtros'
export const SearchBar = (props) => {
	const[name,setName] = useState("")
	const[back,setBack] = useState("False")
	const dispatch = useDispatch()
	const detail = useSelector(state => state.pokemonName)
	useEffect(() => {
		console.log("detail" + detail)
	},[])
	const handleChange = (e) => {
		setName(e.target.value)
		console.log(name)
	}
	const handleSubmit = (e)=>{
		e.preventDefault();
		if(name){
		dispatch(GetName(name))
		setBack("True")
		console.log("esto es back",back)
		}else{
			dispatch(getPokemons())
			setBack("")
		}
		setName("")			
	}
	return (
		<div>
			<div className="search-bar">
				<div className='div_menu'>
					<div className='div_title'>
						<h2 className='title'>Busca un Pokemon</h2>
					</div>
					<form >
						<input
							className='input-search'
							type='search'
							autoComplete='off'
							onChange={(e) => handleChange(e)}	
						/>
						<button className='btn_seatch' type='submit' onClick={handleSubmit}>
						🔍
						</button>
					</form>
				</div>
			</div>
			<div className="filters">
				<Filtros/>
			</div>
		</div>
	);
};

export default SearchBar;