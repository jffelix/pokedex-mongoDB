import React from 'react';
import axios from 'axios';
import PokeList from './PokeList.jsx';
import TypesList from './TypesList.jsx';
// import pokemonJSON from '../../pokemon.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeList: []
    }

    this.showAllPokemon = this.showAllPokemon.bind(this);
  }

  componentDidMount() {
    this.showAllPokemon();
  }

  showAllPokemon() {
    // create Axios GET request
    console.log('Hello from showAllPokemon!');

    axios.get('/pokemon')
    .then((response) => {
      this.setState({
        pokeList: response.data
      })
      console.log('pokeList: ', this.state.pokeList);
    })
  }

  render() {
    return (

      <div>
        <div>
          <h1>Pokemon!</h1>
          <button>Show All</button>
          <select id="type">
            <option>Sort by Type</option>
            <option>Grass</option>
            <option>Fire</option>
            <option>Water</option>
            <option>Normal</option>
            <option>Poison</option>
            <option>Electric</option>
            <option>Ground</option>
            <option>Fighting</option>
            <option>Psychic</option>
            <option>Rock</option>
            <option>Ghost</option>
            <option>Dragon</option>
            {/* <TypesList /> */}
          </select>
          <button>INSERT</button>
          <div>
            <h3>Bulbasaur</h3>
            <img src="http://vignette4.wikia.nocookie.net/nintendo/images/4/43/Bulbasaur.png/revision/latest?cb=20141002083518&path-prefix=en" />
          </div>
          <div>
            <h3>Ivysaur</h3>
            <img src="http://vignette3.wikia.nocookie.net/nintendo/images/8/86/Ivysaur.png/revision/latest?cb=20141002083450&path-prefix=en" />
          </div>
          <div>
            <h3>Venusaur</h3>
            <img src="http://vignette2.wikia.nocookie.net/nintendo/images/b/be/Venusaur.png/revision/latest?cb=20141002083423&path-prefix=en" />
          </div>
          {/* <PokeList /> */}
        </div>
      </div>


    )
  }
}

export default App;

// const App = () => (
//   <div>
//     <div>
//       <h1>Pokemon!</h1>
//       <button>Show All</button>
//       <select id="type">
//         <option>Sort by Type</option>
//         <option>Grass</option>
//         <option>Fire</option>
//         <option>Water</option>
//         <option>Normal</option>
//         <option>Poison</option>
//         <option>Electric</option>
//         <option>Ground</option>
//         <option>Fighting</option>
//         <option>Psychic</option>
//         <option>Rock</option>
//         <option>Ghost</option>
//         <option>Dragon</option>
//       </select>
//       <button>INSERT</button>
//       <div>
//         <h3>Bulbasaur</h3>
//         <img src="http://vignette4.wikia.nocookie.net/nintendo/images/4/43/Bulbasaur.png/revision/latest?cb=20141002083518&path-prefix=en" />
//       </div>
//       <div>
//         <h3>Ivysaur</h3>
//         <img src="http://vignette3.wikia.nocookie.net/nintendo/images/8/86/Ivysaur.png/revision/latest?cb=20141002083450&path-prefix=en" />
//       </div>
//       <div>
//         <h3>Venusaur</h3>
//         <img src="http://vignette2.wikia.nocookie.net/nintendo/images/b/be/Venusaur.png/revision/latest?cb=20141002083423&path-prefix=en" />
//       </div>
//     </div>
//   </div>
// )