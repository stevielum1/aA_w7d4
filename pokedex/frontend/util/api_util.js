
export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  })
);

export const fetchPokemon = (pokemonId) => (
  $.ajax({
    method: 'GET',
    url: `/api/pokemon/${pokemonId}`
  })
);

export const createPokemon = (pokemon) => (
  $.ajax({
    method: 'POST',
    url: '/api/pokemon',
    data: {pokemon}
  })
);
