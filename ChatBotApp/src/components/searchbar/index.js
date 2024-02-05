import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    let keyWords = searchTerm.splice()
    // You can perform a search or any other action with the search term here
    console.log('Search term:', searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your search term"
        value={searchTerm}
        onChange={handleInputChange}
        id='searchBar'
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
