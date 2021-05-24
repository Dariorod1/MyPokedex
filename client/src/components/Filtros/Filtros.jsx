import React,{useEffect,useState} from 'react'
import '../Filtros/Filtros.css'
import {connect} from 'react-redux'
import {GetTypes,setPokemonsOrder,GetCreate, getPokemons, GetApi,getPokemonType} from '../../actions/index'

const Filtros = ({getPokemonType,GetApi, pokemonTypes, setPokemonsOrder,GetCreate,getPokemons,GetTypes}) => {
    useEffect(() => {
        GetTypes()
        
    },[])
    const handleFilter = (e) => {
		setPokemonsOrder(e.target.value);
        
	};
    const handleTypes = (e) => {
		getPokemonType(e.target.value);
            
    };
	const handleOrigin = (e) => {
		if(e.target.value === "Creados"){
        GetCreate()
        }
        if(e.target.value === "Todos"){
            getPokemons()
        }
        if(e.target.value === "API"){
            GetApi()
        }
	};
    return (
        <div>
            <select name='Filter' onChange={(e) => handleFilter(e)} className="select">
				<option value='A-Z'>A-Z</option>
				<option value='Z-A'>Z-A</option>
				<option value='Más Ataque'>💪Más Ataque</option>
				<option value='Menos Ataque'>😌Menos Ataque</option>
			</select>
			<select name='Type' onChange={(e) => handleTypes(e)} className="select">
				<option value='All'>Todos</option>
				{pokemonTypes &&
					pokemonTypes.map((t, i) => (
						<option key={i} value={t}>
                        {t[0].toUpperCase() + t.slice(1)}
						</option>
					))
				}
			</select>
			<select name='Origin' onChange={(e) => handleOrigin(e)} className="select">
				<option value='Todos'>Todos</option>
				<option value='API'>API</option>
				<option value='Creados'>Creados</option>
			</select>
        </div>
    )
}
const mapStateToProps = (state) => {
	return {
		pokemonTypes: state.types,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		setPokemonsOrder: (order) => dispatch(setPokemonsOrder(order)),		
        GetCreate: () => dispatch(GetCreate()),
        getPokemons: () => dispatch(getPokemons()),
        GetApi: () => dispatch(GetApi()),
        GetTypes: () => dispatch(GetTypes()),
		getPokemonType: (type) => dispatch(getPokemonType(type))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Filtros);
