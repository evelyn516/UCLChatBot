import jsonData from '../../API.json'


function searchByTitle(keyword) {
    const results = jsonData.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()));
    return results;
};

function searchContent(keyword) {
    const results = jsonData.filter(item => item.content.toLowerCase().includes(keyword.toLowerCase()));
    return results;
};

function refineResults(input) {
    let searchResults = searchByTitle(input);
    if (searchResults.length === 0) {
        searchResults = searchContent(input)
    };
    return searchResults;
};


export default refineResults;


 

