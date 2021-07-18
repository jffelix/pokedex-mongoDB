const mongoose = require('mongoose');
const pokeListJSON = require('../../pokemon.json');

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  type: String,
  image: String
})

// serves as an entire model
  // no need to code in full methods
var Pokemon = mongoose.model('Pokemon', pokemonSchema);

Pokemon.create(pokeListJSON)
.then(() => {
  console.log('Populated collection');
})
.catch((err) => {
  console.log(err);
})

module.exports.pokemon = Pokemon;