import React, { Component } from 'react';
import Pokecard from './Pokecard';
import '../style/Pokedex.css';
export default class Pokedex extends Component {
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
    return (
      <div className="Pokedex-cards">
        {data.map((pokemon) => {
          if (pokemon.id.length >= 1) {
          }
          return (
            <Pokecard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              base_experience={pokemon.base_experience}
            />
          );
        })}
      </div>
    );
  }
}

/* /*{ <Pokecard
          id={data[0].id}
          name={data[0].name}
          type={data[0].type}
          base_experience={data[0].base_experience}
        />
        <Pokecard
          id={data[1].id}
          name={data[1].name}
          type={data[1].type}
          base_experience={data[1].base_experience}
        />
        <Pokecard
          id={data[2].id}
          name={data[2].name}
          type={data[2].type}
          base_experience={data[2].base_experience}
        />
        <Pokecard
          id={data[3].id}
          name={data[3].name}
          type={data[3].type}
          base_experience={data[3].base_experience}
        />
        <Pokecard
          id={data[4].id}
          name={data[4].name}
          type={data[4].type}
          base_experience={data[4].base_experience}
          Pokedex-cards
        />
        <Pokecard
          id={data[5].id}
          name={data[5].name}
          type={data[5].type}
          base_experience={data[5].base_experience}
          Pokedex-cards
        />
        <Pokecard
          id={data[6].id}
          name={data[6].name}
          type={data[6].type}
          base_experience={data[6].base_experience}
          Pokedex-cards
        />
        <Pokecard
          id={data[7].id}
          name={data[7].name}
          type={data[7].type}
          base_experience={data[7].base_experience}
          Pokedex-cards
        />} */

/* {data.forEach((element) => {
          console.log(element.id);
          return (
            <Pokecard
              id={element.id}
              name={element.name}
              type={element.type}
              base_experience={element.base_experience}
            /> */
