'use strict';

function sortByYearDescending(a, b) {
  return b.year - a.year;
}


const movies = [
  { title: "Movie A", year: 2020, genres: ["Action", "Adventure"] },
  { title: "Movie B", year: 2018, genres: ["Comedy", "Drama"] },
  { title: "Movie C", year: 2022, genres: ["Sci-Fi", "Thriller"] },
];

const sortedByYear = movies.slice().sort(sortByYearDescending);
console.log(sortedByYear);

function ignoreLeadingArticles(title) {
  const articles = ["A", "An", "The"];
  for (const article of articles) {
    if (title.startsWith(article + " ")) {
      return title.slice(article.length + 1); // Remove article and space
    }
  }
  return title;
}

function ignoreLeadingArticles(title) {
    const articles = ["A", "An", "The"];
    for (const article of articles) {
      if (title.startsWith(article + " ")) {
        return title.slice(article.length + 1).trim(); // Remove article and space, and trim any remaining whitespace
      }
    }
    return title;
  }
  
  function sortByTitleIgnoringArticles(a, b) {
    const titleA = ignoreLeadingArticles(a.title);
    const titleB = ignoreLeadingArticles(b.title);
    return titleA.localeCompare(titleB);
  }


const sortedByTitle = movies.slice().sort(sortByTitleIgnoringArticles);
console.log(sortedByTitle);

module.exports = {
    sortByYearDescending,
    sortByTitleIgnoringArticles
  };