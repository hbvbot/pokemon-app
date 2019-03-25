import React from 'react';
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    axios.post('/getpokemon').then(res => {
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
                  <div className='pokemon-img-container'>
                    <img className='pokemon-img' src={pokemon.image} />
                  </div>
                  <div>
                    {pokemon.name} - {pokemon.number}
                  </div>
                  <div>
                    Type:{' '}
                    {pokemon.types.length > 1
                      ? pokemon.types.map((type, i) => {
                          return i === 0 ? `${type} / ` : type;
                        })
                      : pokemon.types[0]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
