//Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.

//Your response should be a number.

//Here are some helpful links:

//String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

//TEST CASES
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.


// create a function 
function findLongestWord(str) {
  //your code here
  //Split the string into an array of strings
  var sensplit = str.split(' ');
//   log to check if the string split.
  console.log(sensplit);
  //initialize a variable to hold the longest word
  var longestWord = 0;
//   create a for loop to loop through the array "sensplit"
  for (var i = 0; i < sensplit.length; i++) {
    if (sensplit[i].length > longestWord) {
      longestWord = sensplit[i].length;
    }
  }
return longestWord;
}

// call the function and log the function
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));



