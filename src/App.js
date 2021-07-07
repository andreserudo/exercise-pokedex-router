import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import pokemons from './data';
import Pokedex from './Pages/Pokedex';
import PageNotFound from './Pages/PageNotFound';
import PokemonDetails from './Pages/PokemonDetails';
import PokedexAbout from './Pages/PokedexAbout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={() => <Pokedex pokemons={pokemons}/>} exact />
        <Route path="/pokemon/:id" component={PokemonDetails} />
        <Route path="/about" component={PokedexAbout} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>              
  );
}

export default App;