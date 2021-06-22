import React, { useState, useEffect } from 'react';
import Pokemons from './Components/Pokemons';
import Pagination from './Components/Pagination';
import Search from './Components/Search';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    'https://pokeapi.co/api/v2/pokemon?'
  );

  useEffect(() => {
    let cancel;
    axios
      .get(currentPage, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        res.data.results.forEach((item) => {
          axios
            .get('https://pokeapi.co/api/v2/pokemon/' + item.name)
            .then((resp) => {
              setPokemons((prevlist) => [...prevlist, resp.data]);
              setFilteredPokemon((prevlist) => [...prevlist, resp.data]);
            });
        });
        setNextPage(res.data.next);
      });

    return () => cancel();
  }, [currentPage]);

  function nextFunct() {
    setCurrentPage(nextPage);
  }

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <Search />
      <Pokemons pokemons={pokemons} />
      <Pagination next={nextPage ? nextFunct : null} />
    </div>
  );
}

export default App;
