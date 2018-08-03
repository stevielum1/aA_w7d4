export const selectAllPokemon = (state) => (
  Object.values(state.entities.pokemon)
);

export const selectPokemon = (state, pokemonId) => (
  state.entities.pokemon[pokemonId]
);
export const selectItem = (state, itemId) => (
  state.entities.items[itemId]
);
