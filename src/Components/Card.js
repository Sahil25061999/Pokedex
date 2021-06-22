import React from 'react';

const Card = ({ id, imgLink, name, types }) => {
  return (
    <div className="pokemonCard" key={id}>
      <img className="pokemonImageCard" src={imgLink} alt={name} />
      <h2>{name}</h2>
      {/* <hr></hr> */}
      <div className="type">
        <h4>Types</h4>
        <ul className="typeList">
          {types.map((type, index) => {
            return <li key={index}>{type.type.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
