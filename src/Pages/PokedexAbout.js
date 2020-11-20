import React, { Component } from 'react';
import Header from '../Components/Header';

class PokedexAbout extends Component {
  render() {
    const url_pokedex = 'https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png';
    const randomImage_1 = 'https://cdn.bulbagarden.net/upload/f/f8/Ash_Johto_Pok%C3%A9dex.png';
    const randomImage_2 = 'https://cdn.bulbagarden.net/upload/thumb/3/37/RG_Pok%C3%A9dex.png/730px-RG_Pok%C3%A9dex.png';
    const randomImage_3 = 'https://cdn.bulbagarden.net/upload/2/29/Pok%C3%A9dex_entry_SS.png';
    return(
      <>
        <Header />
        <h1>What is a Pokedex?</h1>
        <img src={url_pokedex} alt="Pokedex" />
        <p>The Pokédex (Japanese: ポケモン図鑑 illustrated Pokémon encyclopedia) is a digital encyclopedia created by Professor Oak as an invaluable tool to Trainers in the Pokémon world. It gives information about all Pokémon in the world that are contained in its database, although it differs in how it acquires and presents information over the different media. However, they are also only given to a few Trainers at a time, generally to the ones that are felt to have exceptional potential and skill. Regional Pokédexes give information about Pokémon native to its particular region, while the National Pokédex records information about all known Pokémon.</p>
        <p>Pokédex entries typically describe a Pokémon in only two or three sentences. They may give background information on the habitat or activities of a Pokémon in the wild or other information on the Pokémon's history or anatomy. Pokédex entries also include height, weight, cry, footprint (prior to Generation VI), location, other forms, and a picture of the Pokémon.</p>
        <h2>Some random images:</h2>
        <img src={randomImage_1} alt='Random Pokedex Image' />
        <img src={randomImage_2} alt='Random Pokedex Image' />
        <img src={randomImage_3} alt='Random Pokedex Image' />
        <p>From <a href="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex" target="_blank">Bulbapedia</a></p>        
      </>
    )
  }
}

export default PokedexAbout;
