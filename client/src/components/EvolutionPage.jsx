import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokemon from './Pokemon';

class EvolutionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    const pokemonID = this.props.match.params.pokemonID;
    let pokemon, evolution;

    axios.post('/getevolution', { pokemonID: pokemonID }).then(res => {
      console.log(res.data);
    });

    axios.post('/getpokemon').then(res => {
      pokemon = res.data.pokemons;
    });

    this.setState({
      pokemon: res.data.pokemons
    });
  }

  render() {
    return (
      <div>
        <div className='container-fluid main-container'>
          <div className='row'>
            <div className='col-12 pokemon-app-title text-center'>
              Pokemon App
            </div>
          </div>
          <div className='row'>
            {this.state.pokemon.map(pokemon => {
              return (
                <div className='col-lg-3 col-md-4 col-6 my-5 text-center'>
                  <Pokemon
                    image={pokemon.image}
                    name={pokemon.name}
                    number={pokemon.number}
                    types={pokemon.types}
                    id={pokemon.id}
                    maxCP={pokemon.maxCP}
                    maxHP={pokemon.maxHP}
                  />
                  <Link to={`/${pokemon.id}`} href={`/${pokemon.id}`}>
                    More Information
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default EvolutionPage;
