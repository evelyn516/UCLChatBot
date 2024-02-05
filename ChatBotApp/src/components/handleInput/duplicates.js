function duplicateRefinement(dictionaryArray) {
        // Step 1: Count occurrences
        const countMap = dictionaryArray.reduce((count, dictionary) => {
          const key = JSON.stringify(dictionary); // Convert the dictionary to a string for uniqueness
          count[key] = (count[key] || 0) + 1;
          return count;
        }, {});
      
        // Step 2: Create an array of unique dictionaries
        const uniqueDictionaries = dictionaryArray.filter((dictionary, index, self) => {
          const key = JSON.stringify(dictionary);
          return self.findIndex(d => JSON.stringify(d) === key) === index;
        });
      
        // Step 3: Create an array of objects with dictionary and count
        const dictionaryCountArray = uniqueDictionaries.map(dictionary => ({
          dictionary,
          count: countMap[JSON.stringify(dictionary)],
        }));
      
        // Step 4: Sort the array by count in descending order
        const sortedArray = dictionaryCountArray.sort((a, b) => b.count - a.count);
      
        // Step 5: Extract only the unique dictionaries from the sorted array
        const resultArray = sortedArray.map(entry => entry.dictionary);
      
        // Return the result array
        return resultArray;
      }
      
  
  export default duplicateRefinement;