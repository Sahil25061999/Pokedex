import React from 'react';

const Pokemons = ({ pokemons }) => {
  return (
    <div className="pokemonList">
      {pokemons.map((pokemon) => {
        return (
          <div className="pokemonCard" key={pokemon.name}>
            <h3>{pokemon.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Pokemons;
