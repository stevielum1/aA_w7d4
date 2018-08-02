import React from 'react';

export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(){
    this.props.requestPokemon(this.props.pokemon.id);
  }

  render() {
    // debugger
    return (
      <div>
        {this.props.pokemon.name}
      </div>
    );
  }

}
