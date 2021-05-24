import React, { Fragment , useEffect, useState} from "react";
import { connect } from "react-redux";
import { addPokemons,GetTypes } from "../../actions/index";
import '../Creation/Creation.css'
import axios from 'axios'
import {FORMS} from '../../utils/constants'

const Validate = (data) => {
	let errors = {};
	let reg = /^\d+$/;
	if (!data.name) {
		errors.name = 'El nombre es requerido';
	}
	if (!data.hp) {
		errors.hp = 'HP es requerido';
	}
	if (!data.attack) {
		errors.attack = 'Attack es requerido';
	}
	if (!data.defense) {
		errors.defense = 'Defense es requerido';
	}
	if (!data.speed) {
		errors.speed = 'Speed es requerido';
	}
	if (!data.height) {
		errors.height = 'Height es requerido';
	}
	if (!data.weight) {
		errors.weight = 'Weight es requerido';
	}
	return errors;
};

export function Creation({pokemonTypes, GetTypes,addPokemons}) {
	const [Data, setData] = useState({
			name: '',
			hp: '',
			attack: '',
			defense: '',
			speed: '',
			height: '',
			weight: '',
			type: [],
			sprite: "",
	});
	const [Types, setTypes] = useState([]);
	const [Errors, setErrors] = useState({});
	const [Alert, setAlert] = useState({ errors: false, create: false });

	useEffect(() => {
			GetTypes();
	}, [GetTypes]);
	useEffect(() => {
			setErrors(Validate(Data));
			console.log("errors",Errors)
	}, [Data]);
	useEffect(() => {
			if (!Object.keys(Errors).length) {
			setAlert({...Alert, errors: false });
			console.log("alert",Alert)
		}
	}, [Errors]);
  
	useEffect(() => {
		if (Types.length) {
		let total = []
		pokemonTypes.map((t,i) => {
			if(Types.includes(t) === true){
			total.push(i+1)
			}
		})
				setData({...Data, type: Types});
		}
	}, [Types]);
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		if(Object.keys(Errors).length){
			setAlert({...Alert, errors: true})
		}else{
			try {
				await axios.post('http://localhost:3002/pokemons', Data);
				setAlert({...Alert, create: true})
			} catch (err) {
				console.log(err);
			}
		}
	};
    const handleChange = (e) => {
		setData({...Data, [e.target.name]: e.target.value});
	};
    const handleTypes = (e) => {
		if (Types.length < 2) {
			if (!Types.includes(e.target.value)) {
				setTypes([...Types, e.target.value]);
			}
		} else setTypes([e.target.value]);
	};
  return(
    <form onSubmit={(e) => handleSubmit(e)}>
				<div className='div_g'>
					<div>
						<h1 className='title-create'>Create a Pokemon</h1>
					</div>
					{Alert.errors ? (
						<div className='div_errors'>
							<ul>
								{Object.values(Errors).map((el) => (
									<li key={el} className='li_text'>
										{el}
									</li>
								))}
							</ul>
						</div>
					) : null}
					{FORMS &&
						FORMS.map((el, i) => (
							<div key={i} className='div_f'>
								<div key={i} className='div_label'>
									<label key={i} className='label'>
										{el.label}:
									</label>
								</div>
								<input
									className='input'
									key={el.name}
									name={el.name}
									type='text'
									autoComplete='off'
									onChange={(e) => handleChange(e)}
								/>
							</div>
						))}
            <div className='div_types'>
						<select onChange={(e) => handleTypes(e)}>
							{pokemonTypes &&
								pokemonTypes.map((t, i) => (
									<option key={i} value={i+1}>
										{t}
									</option>
								))}
						</select>
						<div className='div_type_container'>
            🧬Tipos
							{Types &&
								Types.map((el, i) => (
									<div key={i} className='div_type'>
										<label className='label'>{el}</label>
									</div>
								))}
						</div>
					</div>
					<div className='div_submit'>
						<button className='btn_submit' type='submit' >
							Create a Pokemon
						</button>
					</div>
					{Alert.create ? (
						<div className='div_create_confirm'>
							<h3 className='message_create'>
								The Pokemon was created successfully
							</h3>
						</div>
					) : null}
				</div>
			</form>
  )

};
const mapStateToProps = (state) => {
  return {
    pokemonTypes: state.types,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPokemons: (pokemon) => dispatch(addPokemons(pokemon)),
    GetTypes: () => dispatch(GetTypes())
}}
export default connect(mapStateToProps, mapDispatchToProps)(Creation);
