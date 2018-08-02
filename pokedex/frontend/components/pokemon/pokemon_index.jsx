import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

export default class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    if (this.props.pokemon.length === 0) return <h1>Loading...</h1>;

    return (
      <div>
        <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer}/>
        <ul className="pokemon-index">
          {
            this.props.pokemon.map( (pokemon) => {
              return <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />;
            })
          }
        </ul>
      </div>
    );
  }
}
