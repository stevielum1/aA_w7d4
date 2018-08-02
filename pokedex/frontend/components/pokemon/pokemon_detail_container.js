import {connect} from 'react-redux';

import {requestPokemon} from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
import {selectPokemon} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  pokemon: selectPokemon(state, ownProps.match.params.pokemonId)
});

const mapDispatchToProps = (dispatch) => ({
  requestPokemon: (pokemonId) => dispatch(requestPokemon(pokemonId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
