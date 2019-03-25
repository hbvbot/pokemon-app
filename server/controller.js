const { request } = require('graphql-request');

module.exports = {
  getPokemon: (req, res) => {
    const query = `{
      pokemons(first: 200) {
        id
        number
        name
        maxCP
        maxHP
        image
        types
      }
    }`;

    request('https://graphql-pokemon.now.sh', query).then(data =>
      res.send(data)
    );
  },

  getEvolution: (req, res) => {
    const query = `{
  pokemon(id: "${req.body.pokemonID}") {
    id
    number
    name
    maxCP
    maxHP
    image
    types
    evolutions {
      id
      number
      name
      maxCP
      maxHP
      image
      types
    }
  }
}`;

    request('https://graphql-pokemon.now.sh', query).then(data =>
      res.send(data)
    );
  }
};
