import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokemon from './Pokemon';

class EvolutionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      evolution: [],
      selectedPokemonName: null
    };
    this.changeEvolve = this.changeEvolve.bind(this);
  }

  componentDidMount() {
    const pokemonID = this.props.match.params.pokemonID;

    axios.post('/getevolution', { pokemonID: pokemonID }).then(res => {
      const evolution = [];
      const selectedPokemon = {
        image: res.data.pokemon.image,
        name: res.data.pokemon.name,
        number: res.data.pokemon.number,
        types: res.data.pokemon.types,
        id: res.data.pokemon.id,
        maxCP: res.data.pokemon.maxCP,
        maxHP: res.data.pokemon.maxHP
      };

      evolution[0] = selectedPokemon;

      for (let i = 0; i < res.data.pokemon.evolutions.length; i++) {
        evolution.push(res.data.pokemon.evolutions[i]);
      }

      this.setState({
        evolution: evolution,
        selectedPokemonName: selectedPokemon.name
      });
    });
  }

  changeEvolve(e) {
    const pokemonID = e.target.id;

    axios.post('/getevolution', { pokemonID: pokemonID }).then(res => {
      const evolution = [];
      const selectedPokemon = {
        image: res.data.pokemon.image,
        name: res.data.pokemon.name,
        number: res.data.pokemon.number,
        types: res.data.pokemon.types,
        id: res.data.pokemon.id,
        maxCP: res.data.pokemon.maxCP,
        maxHP: res.data.pokemon.maxHP
      };

      evolution[0] = selectedPokemon;

      for (let i = 0; i < res.data.pokemon.evolutions.length; i++) {
        evolution.push(res.data.pokemon.evolutions[i]);
      }

      this.setState(
        {
          evolution: evolution,
          selectedPokemonName: selectedPokemon.name
        },
        () => window.scrollTo(0, 0)
      );
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
            <div className='col-12 text-center'>
              {this.state.selectedPokemonName} Evolution Tree
            </div>
          </div>
          <div className='row mx-auto d-flex justify-content-center align-content-center'>
            {this.state.evolution.map(pokemon => {
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
                </div>
              );
            })}
          </div>
          <div className='row'>
            {this.props.location.state.map(pokemon => {
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
                      state: this.props.location.state
                    }}
                    href={`/${pokemon.id}`}
                    onClick={this.changeEvolve}
                    id={pokemon.id}
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

export default EvolutionPage;
