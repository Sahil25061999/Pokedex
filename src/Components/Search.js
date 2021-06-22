import React from 'react';
const Search = ({ handleChange }) => {
  return (
    <div className="inputContainer">
      <input
        placeholder="Search"
        type="text"
        className="inputText"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
