# Repeated word

## Challenge Description : 

    The challenge is to create a JavaScript function called repeated_word that takes a string as its argument and returns the first repeated word in that string. The function should follow a specific set of steps to achieve this.

## Steps to Solve the Challenge

1. Tokenize the Input String: 

The first step is to split the input string into individual words. This can be done using regular expressions or string splitting, considering spaces and punctuation as word separators.

2. Create a Data Structure: 

Next, create a data structure, such as a JavaScript Map, to keep track of the words encountered so far in the string. This data structure will be used to check if a word has been seen before.

3. Iterate Through Words: 

*Iterate through the array of words and perform the following checks for each word:*

    * Convert the word to lowercase to ensure case-insensitive comparison.
    * Check if the word is already present in the data structure. If it is, return that word as it's the first repeated word.
    * If the word is not in the data structure, add it to the data structure.
    * Handling No Repeated Word Found: If the loop completes without finding any repeated word, return null or an appropriate message to indicate that there are no repeated words in the input string.

## code : 

``` javascript
function repeated_word(str) {
  const words = str.split(/\W+/);

  const wordMap = new Map();

  for (const word of words) {
    const lowercaseWord = word.toLowerCase();
    if (wordMap.has(lowercaseWord)) {
      return lowercaseWord;
    }
    wordMap.set(lowercaseWord, true);
  }

  return null;
}
```