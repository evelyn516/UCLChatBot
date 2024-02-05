import React, { useState, useEffect } from 'react';
import refineResults from './function';

import "./index.css"
const SearchAll = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Replace 'your-api-endpoint' with the actual API endpoint you want to query
        // const response = await fetch(`https://v2.jokeapi.dev/joke/Any?type=single&amount=10`);
        // const data = await response.json();
        if (searchTerm.length > 3){
        let data = refineResults(searchTerm)
        setSearchResults(data)};
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm.trim() !== '') {
      fetchData();
    } else {
      // Clear search results if the search term is empty
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='search_container'>
      {searchResults.length > 0 && (
        <ul className='search_results'>
          {searchResults.map((result) => (
            <><li key={result.title}>{result.content}</li><br></br></>
          ))}
        </ul>
      )}
      {searchResults.length === 0 && !loading && searchTerm !== "" && (
        <p className='no_results'>No results found. Try reducing to a few key words.</p>
      )}
      {searchResults.length === 0 && !loading && searchTerm === "" && (
        <p className='no_results'>Start looking for your frequently asked Question</p>
      )}
      <input
        className='search_input'
        type="text"
        placeholder="Search me"
        value={searchTerm}
        onChange={handleInputChange}
      />
    
      {loading && <p>Loading...</p>}
    

    

    </div>
  );
};

export default SearchAll;
