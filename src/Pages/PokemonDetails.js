import React, { Component } from 'react';
import Header from '../Components/Header';
import pokemons from '../data';

class PokemonDetails extends Component {

  getPokemonInfo() {
    const { id } = this.props.match.params;
    const pokemon = pokemons.filter(element => element.id == id);
    
    return pokemon[0];
  }

  render() {
    const { name, type, averageWeight, image, summary, foundAt } = this.getPokemonInfo();
    
    return (
      <div>
        <Header />
        <h1>Detail</h1>
        <img src={image} alt={name} />        
        <br />
        {name}
        <br />
        {type}
        <br />
        {averageWeight.value}
        <br />
        {summary}        
      </div>
    )
  }
}

export default PokemonDetails;
