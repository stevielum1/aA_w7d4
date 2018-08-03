import React from 'react';
import {withRouter} from 'react-router-dom';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      poke_type: "",
      attack: "",
      defense: "",
      moves: []
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    const that = this;
    e.preventDefault();
    this.props.createPokemon(this.state).then( (pokemon) => {
      // debugger;
      const id = Object.keys(pokemon)[0];
      that.props.history.push(`pokemon/${id}`);
    });
  }

  render() {
    const TYPES = [
      'fire',
      'electric',
      'normal',
      'ghost',
      'psychic',
      'water',
      'bug',
      'dragon',
      'grass',
      'fighting',
      'ice',
      'flying',
      'poison',
      'ground',
      'rock',
      'steel'
    ];
    return (
      <div>
        <h1>New Pokemon Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="name" value={this.state.name} onChange={this.update("name")}></input>
          <input placeholder="image url" value={this.state.image_url} onChange={this.update("image_url")}></input>
          <select defaultValue={TYPES[0]} onChange={this.update("poke_type")}>
            {TYPES.map((type, idx) => <option key={idx} value={type}>{type}</option>)}
          </select>
          <input type="number" placeholder="attack" value={this.state.attack} onChange={this.update("attack")}></input>
          <input type="number" placeholder="defense" value={this.state.defense} onChange={this.update("defense")}></input>
          <input type="submit" value="Create Pokemon"></input>
        </form>
      </div>
    );
  }
}

export default withRouter(PokemonForm);
