import jsonData from '../../../API.json'



function searchByTitle(keyword) {
    const results = jsonData.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()));
    return results;
}

function searchContent(keyword) {
    const results = jsonData.filter(item => item.content.toLowerCase().includes(keyword.toLowerCase()));
    return results;
}

let input = 'gatsby'
// Example: Search for titles containing the keyword "gatsby"
let searchResults = searchByTitle(input);
if (searchResults == null) {
    searchResults = searchContent(input)
}
console.log(searchResults);
