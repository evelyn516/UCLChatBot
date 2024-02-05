import refineResults from "./function";
import duplicateRefinement from "./duplicates";

function topResults(userInput){
    let words = userInput.split(" ");
    
    let keyWords = words.filter(word => word.length > 3);
    let sortedWords = keyWords.sort((a, b) => b.length - a.length); // Reverse the order
    // console.log(sortedWords)
   
    let queryResults = sortedWords.map(keyword => refineResults(keyword));

    let flatResults = queryResults.flat(1);
    let newResults = [...new Set(flatResults)];
    let bestResults = duplicateRefinement(newResults)
    const topThreeResults = bestResults.slice(0, 3);
    console.log(topThreeResults)
    return topThreeResults;
};

export default topResults;