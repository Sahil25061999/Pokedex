import React from 'react';

const Card = ({ id, imgLink, name, types }) => {
  function bgChanger() {
    let style;
    console.group(types);
    switch (types[0].type.name) {
      case 'grass':
        return {
          background: 'linear-gradient(to top,#00c400,#22e807,#92eb9b)',
        };
      case 'bug':
      case 'poison':
        return {
          background: 'linear-gradient(to top,#bb13b8,#c104e2,#d096ff)',
        };
      case 'water':
        return {
          background: 'linear-gradient(to top,#008dc4,#07b0e8,#92ebe7)',
        };
      case 'fire':
        return {
          background: 'linear-gradient(to top,#ff5f03,#ff7c00,#ffad36)',
        };
      case 'fighting':
        return {
          background: 'linear-gradient(to top,#ba0000,#eb0000,#ff2c2c)',
        };

      default:
        return {
          background: 'linear-gradient(to top,#ffbb00,#ffe300,#fff400)',
        };
    }
  }

  return (
    <div className="pokemonCard" key={id} style={bgChanger()}>
      <img className="pokemonImageCard" src={imgLink} alt={name} />
      <h2>{name}</h2>

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
