//wednesday.
// Split the string into an array of words using space as the delimiter.
// Create an array to store the capitalized words.
// Loop through each word
// Convert the word to lowercase, except for the first letter.
// Capitalize the first letter of the word.
// Add the capitalized word to the new array.
// Join the capitalized words 
// Return the title-cased string.
// Test the function with sample sentences.
function titleCase(str) {
    
const words = str.split(' ');
  
    
const capitalizedWords = [];
  
    
  for (let word of words) {
      
    const lowercaseWord = word.toLowerCase();
      
    const capitalizedWord = lowercaseWord.charAt(0).toUpperCase() + lowercaseWord.slice(1);
      
    capitalizedWords.push(capitalizedWord);
  }
  
    
    const titleCaseStr = capitalizedWords.join(' ');
  
    
    return titleCaseStr;
}
    
console.log(titleCase("I'm a little tea pot")); // "I'm A Little Tea Pot"
console.log(titleCase("sHoRt AnD sToUt")); // "Short And Stout