import React,{useEffect,useState} from 'react'
import { connect } from "react-redux";
import '../PokemonDetail/PokemonDetail.css'
import { getDetails,GetName } from "../../actions/index";
import {Link} from 'react-router-dom';
const PokemonDetail = (props) => {
    let id = props.match.params.id
    useEffect(() => {
        props.getDetails(id);
        console.log(id)
      }, [id]);
    return (
        <div className="detalle">
                <div className="btn-back">
                <Link to={"/home"}>
                    <h1 className="btn-link">🔙Atras</h1>
                </Link>
                </div>   
             {
                 props.state && props.state.map(p=>(
                    <div>
                        <img src={p.sprite} alt="" />
                        <h1>Name:</h1>
                        <h2>{p.name[0].toUpperCase() + p.name.slice(1)}</h2>
                        <div className="cuadro-stats">
                        <div className="stats">
                            <h3>HP: {props.state[0].hp}</h3>
                            <h3>Attack: {p.attack}</h3>
                            <h3>Defense: {p.defense}</h3>
                        </div>
                        <div className="stats">
                            <h3>Speed: {p.speed}</h3>
                            <h3>Height: {p.height}</h3>
                            <h3>Weight: {p.weight}</h3>
                        </div>
                        <h2>Tipo:</h2>
                        <div className="types">
                        {
                            p.Types && p.Types.map(t=>(
                                <div className="tipo-detalle">
                                <span>{t.name[0].toUpperCase() + t.name.slice(1)}</span>
                                </div>
                                
                            ))
                        }
                        </div>
                        </div>                 
                    </div>
                 ))
             }
             
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      state: state.pokemonDetails,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getDetails: (id) => dispatch(getDetails(id)),
      GetName : (id) => dispatch(GetName(id))
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(PokemonDetail)
