import React from 'react';
import {Provider} from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import ItemDetailContainer from './items/item_detail_container';
import PokemonFormContainer from './pokemon/pokemon_form_container';

const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <div className="index-container">
        <Route path="/" component={PokemonIndexContainer} />
        <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer}/>
        <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
        <Route exact path="/" component={PokemonFormContainer} />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
