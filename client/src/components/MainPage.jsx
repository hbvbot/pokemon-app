import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokemon from './Pokemon';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    axios.post('/getpokemon').then(res => {
      console.log(res.data);
      this.setState({
        pokemon: res.data.pokemons
      });
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
                  <Link
                    to={{
                      pathname: `/${pokemon.id}`,
                      state: this.state.pokemon
                    }}
                    href={`/${pokemon.id}`}
                  >
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

export default MainPage;
