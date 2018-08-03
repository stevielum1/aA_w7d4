import merge from 'lodash/merge';
import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON, CREATE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;

    case RECEIVE_POKEMON:
      return merge({}, state, action.pokemon);
    case CREATE_POKEMON:
      return merge({}, state, action.pokemon);
    default:
      return state;
  }
};

export default pokemonReducer;
