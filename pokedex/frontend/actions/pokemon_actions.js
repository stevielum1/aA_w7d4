import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';
export const CREATE_POKEMON = 'CREATE_POKEMON';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePokemon = (payload) => {
  // debugger
  return ({
  type: RECEIVE_POKEMON,
  pokemon: payload.pokemon,
  items: payload.items || []
});
};

export const receiveNewPokemon = pokemon => {
  return {
    type: CREATE_POKEMON,
    pokemon
  };
};

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestPokemon = (pokemonId) => (dispatch) => (
  APIUtil.fetchPokemon(pokemonId)
    .then(payload => dispatch(receivePokemon(payload)))
);

export const createPokemon = (pokemon) => (dispatch) => (
  APIUtil.createPokemon(pokemon)
    .then(payload => {
      // debugger
      dispatch(receiveNewPokemon(payload.pokemon));
      return payload.pokemon;
    })
);
