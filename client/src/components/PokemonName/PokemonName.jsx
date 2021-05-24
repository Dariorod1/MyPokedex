import React from 'react'
import {Link} from 'react-router-dom';
const PokemonName = ({detail}) => {
    return (
        <div>
            {
              detail && detail.map(p=> (
                <div className = "poke" key={p.id}>
                  <Link to={`/pokemons/${p.id}`} className="link-poke">
                    <h4>{p.name[0].toUpperCase() + p.name.slice(1)}</h4>
                  </Link>
                  <img src={p.sprite} alt="" />
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
              ))
            }
        </div>
    )
}

export default PokemonName
