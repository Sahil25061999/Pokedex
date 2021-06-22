import React, { useState, useEffect } from 'react';
import Pokemons from './Components/Pokemons';
import Pagination from './Components/Pagination';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit:18'
  );
  const [imageLink, setImageLink] = useState([]);

  useEffect(() => {
    let cancel;
    axios
      .get(currentPage, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setPokemons(res.data.results);
        setNextPage(res.data.next);
        setPrevPage(res.data.previous);
      });

    return () => cancel();
  }, [currentPage]);

  function nextFunct() {
    setCurrentPage(nextPage);
  }

  function previousFunct() {
    setCurrentPage(prevPage);
  }

  console.log(imageLink);

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <Pokemons pokemons={pokemons} />
      <Pagination
        next={nextPage ? nextFunct : null}
        prev={prevPage ? previousFunct : null}
      />
    </div>
  );
}

export default App;
