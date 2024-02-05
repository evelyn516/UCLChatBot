import React, { useState, useEffect } from 'react';
import topResults from './keywords';

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
       
        let data = topResults(searchTerm);
        setSearchResults(data);
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
    <div>
      <input
        type="text"
        placeholder="SEARCH ME"
        value={searchTerm}
        onChange={handleInputChange}
      />

      {loading && <p>Loading...</p>}

      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <><li key={result.title}>{result.content}</li><br></br></>
            // Adjust 'id' and 'name' based on your API response structure
          ))}
        </ul>
      )}

      {searchResults.length === 0 && !loading && (
        <p>No results found. Try a reducing to a few key words.</p>
      )}
    </div>
  );
};

export default SearchAll;
