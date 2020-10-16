import React, { Component } from 'react';
import Pokecard from './Pokecard';
import '../style/Pokedex.css';

export default class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Mano Ganadora!</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Mano Perdedora</h1>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h4>Experiencia total: {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((pokemon) => (
            <Pokecard
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              base_experience={pokemon.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}
