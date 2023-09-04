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

// Test cases
console.log(
  repeated_word('Once upon a time, there was a brave princess who...')
);
console.log(
  repeated_word('It was the best of times, it was the worst of times...')
);
console.log(
  repeated_word('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs...')
);
console.log(repeated_word('This is a test sentence with no repeated words.'));
