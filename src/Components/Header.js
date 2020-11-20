import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
      return(
        <div>
          <Link to="/" >Home</Link>
          <Link >All Pokemons</Link>
          <Link to="/about">What is a Pokedex?</Link>
        </div>
      )
    }
}

export default Header;