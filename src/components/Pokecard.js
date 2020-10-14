import React, { Component } from 'react';
import '../style/Pokecard.css';
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
export default class Pokecard extends Component {
  static defaultProps = {
    data: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
    ],
  };
  render() {
    const data = this.props.data;
    const imgSrc = `${POKE_API}${data[0].id}.png`;
    return (
      <div className="Pokecard">
        <div className="Pokecard-title">{data[0].name}</div>
        <img className="Pokecard-image" alt={data[0].name} src={imgSrc} />
        <div className="Pokecard-data">Tipo: {data[0].type}</div>
        <div className="Pokecard-data ">Exp: {data[0].base_experience}</div>
      </div>
    );
  }
}
