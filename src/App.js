import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import Pokecard from './components/Pokecard';

function App() {
  return (
    <div className="App">
      <Pokecard name="charmander" />
    </div>
  );
}

export default App;
