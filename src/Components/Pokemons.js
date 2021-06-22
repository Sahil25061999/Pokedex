import React from 'react';
import Card from './Card';

const Pokemons = ({ pokemons }) => {
  return (
    <div className="pokemonList">
      {pokemons.map((pokemon, index) => {
        return (
          <Card
            key={index}
            id={pokemon.name}
            imgLink={pokemon.sprites.other.dream_world.front_default}
            name={pokemon.name}
            types={pokemon.types}
          />
        );
      })}
    </div>
  );
};

export default Pokemons;
