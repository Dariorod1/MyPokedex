import React from 'react';
import {Link} from 'react-router-dom';

import './NavBar.css'

export const Nav = () => {
	return (
		<div className="nav">
			<div className='div_logo'>
				<Link to = '/home' className="link">
					<h2>Pokedex App</h2>
				</Link>
			</div>
			<div className='div_menu_nav'>
				<div className='div_link'>
				<Link to = '/home' className="link">
						Inicio
				</Link>
				</div>
				<div className='div_link'>
					<Link to="/creation" className="link" >
						Crea Tu Pokemon
					</Link>	
				</div>
			</div>
		</div>
	);
};

export default Nav;
