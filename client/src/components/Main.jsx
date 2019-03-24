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
        <div className='row'>
          {this.state.pokemon.map(pokemon => {
            return (
              <div className='col-2'>
                <div>
                  <img className='img-fluid' src={pokemon.image} />
                </div>
                <div>
                  {pokemon.name} - {pokemon.number}
                </div>
                <div>Type: {JSON.stringify(pokemon.types)}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Main;
