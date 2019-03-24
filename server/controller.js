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
  }
};
