import React from 'react'
import '../LandingPage/LandingPage.css'
import image from '../../img/background.jpg'
import {Link} from 'react-router-dom';
const LandingPage = () => {
    return (
        <div className="container">
            <div className="bienvenida">
                <h1>Welcome To The Pokedex App</h1>
                <hr></hr>
                <span>Enjoy the pokedex app, find your favorite pokemons and learn more about them</span>
            </div>
            <div className='div_btn'>
				<Link to='/home'>
					<button className='btn'>GO!</button>
				</Link>
			</div>
        </div>
    )
}

export default LandingPage
