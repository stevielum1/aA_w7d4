import React from 'react';
import ItemDetailContainer from '../items/item_detail_container';
import { Link, Route } from 'react-router-dom';

export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger;
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    // debugger;
    if(this.props.pokemon.id != newProps.match.params.pokemonId) {
      this.props.requestPokemon(newProps.match.params.pokemonId);
    }
  }

  render() {
    const {pokemon, items} = this.props;
    if(pokemon.moves === undefined) {return <div>Loading...</div>;}
// debugger
    return (
      <div className="pokemon-detail">
        <div><img src={pokemon.image_url}/></div>
        <h2>{pokemon.name}</h2>
        <h3>Type: {pokemon.poke_type}</h3>
        <h3>Attack: {pokemon.attack}</h3>
        <h3>Defense: {pokemon.defense}</h3>
        <h3>Moves: {pokemon.moves.join(", ")}</h3>
        <div>
          {
            Object.values(items).map(item => {
              return (
                <Link key={item.id} to={`/pokemon/${pokemon.id}/items/${item.id}`} >
                  <span>
                    <img width="100" src={item.image_url} />
                  </span>
                </Link>
              );
            })
          }
        </div>
      </div>
    );
  }

}
