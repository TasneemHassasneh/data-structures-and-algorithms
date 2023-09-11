function leftJoin(synonyms, antonyms) {
  const result = [];

  for (const key in synonyms) {
    const synonym = synonyms[key];
    const antonym = antonyms[key] || null;

    result.push([key, synonym, antonym]);
  }

  return result;
}

module.exports = leftJoin;