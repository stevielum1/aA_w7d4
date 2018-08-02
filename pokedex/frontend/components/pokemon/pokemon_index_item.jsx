import React from 'react';
import {Link} from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => {
  return (
    <li>
      <Link to={`/pokemon/${pokemon.id}`}>
        <img width="20" src={pokemon.image_url}></img>
        <div>{pokemon.name}</div>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
