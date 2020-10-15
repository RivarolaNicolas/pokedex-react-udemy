import React, { Component } from 'react';
import '../style/Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let formatearIdURL = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
export default class Pokecard extends Component {
  render() {
    const data = this.props;
    return (
      <div className="Pokecard">
        <div className="Pokecard-title">{data.name}</div>
        <img
          className="Pokecard-image"
          alt={data.name}
          src={`${POKE_API}${formatearIdURL(data.id)}.png`}
        />
        <div className="Pokecard-data">Tipo: {data.type}</div>
        <div className="Pokecard-data">Exp: {data.base_experience}</div>
      </div>
    );
  }
}
