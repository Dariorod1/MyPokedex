import React from 'react'
import '../Pokemon/Pokemon.css'
import {Link} from 'react-router-dom';
const Pokemon = ({posts, loading}) => {
   
    if (loading) {
        return <h2>Loading...</h2>;
      }
    
      return (
        <div className="container-pokes">
            {
        posts && posts.map(p => {
          return (
            
            <div className = "poke" key={p.id}>
            <Link to={`/pokemons/${p.id}`} className="link-poke">
              <h4>{p.name[0].toUpperCase() + p.name.slice(1)}</h4>
            </Link>
              <img src={p.sprite} alt="" />
              <div className="contenedor-tipos">
              {
                p && p.Types.map(type => {
                  return(
                    <div className="tipos" key={type.name}>
                    <p>{type.name[0].toUpperCase() + type.name.slice(1)}</p>
                    </div>
                  )
                })
              }
              </div>
            </div>
            
          )
        })
        }
        </div>
      );
    };


export default Pokemon
