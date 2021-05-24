import '../Home/Home.css';
import React , { useEffect, useState} from 'react'

import {connect} from 'react-redux'
import {getPokemons} from '../../actions/index'
import Navbar from '../Nav/NavBar'
import axios from 'axios'
import {Link} from 'react-router-dom';
import Pokemon from '../Pokemon/Pokemon';
import Pagination from '../Pagination/Pagination'

function Home({getPokemons,state}) {
  const [pokemons, setPokemons] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokesPerPage] = useState(12);
  
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      //const res = await axios.get('http://localhost:3002/pokemons');
      getPokemons()
      setPosts(state);
      setLoading(false);
    };
    fetchPosts();
    console.log("fetchpost"+ state)
  },[])
  useEffect(() => {
      setPosts(state);
      setLoading(false);
  },[])
   const indexOfLastPost = currentPage * pokesPerPage;
   const indexOfFirstPost = indexOfLastPost - pokesPerPage;
   const currentPosts = state.slice(indexOfFirstPost, indexOfLastPost);
   const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
    <div className="container-pokes">
      <Pokemon posts={currentPosts} loading={loading}/>
    </div>
    <div className="container-pag">
    <Pagination
        pokesPerPage={pokesPerPage}
        totalPosts={state.length}
        paginate={paginate}
    /> 
    </div>
    </div>
    
  );
}
const feliToProps = (state) => {
  return {
    state: state.pokemonHome
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    getPokemons: () => dispatch(getPokemons())
  }
}
export default connect(feliToProps,mapDispatchToProps)(Home);

//=========================================//

