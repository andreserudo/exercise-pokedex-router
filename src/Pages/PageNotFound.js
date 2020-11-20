import React, { Component } from 'react';
import Header from '../Components/Header';

class PageNotFound extends Component {
  render() {
    const url_page = 'http://cdn.playbuzz.com/cdn/e86e43a4-64aa-4434-b756-a1c7f1591d41/9bf07765-8a0c-4a5c-81da-4c29a41e7013.jpg';
    return (
      <div>
        <Header />
        <h1>Whose these page?</h1>
        <img src={url_page} alt='Whose page?'/>
        <p>I mean, seriously... I don't know what page you are looking for.</p>
      </div>
      
    )
  }
}

export default PageNotFound;
