'use strict';

const { expect } = require("chai");
const { sortByYearDescending, sortByTitleIgnoringArticles } = require("./functions");

describe("Comparator Functions", () => {
  const movieA = { title: "Movie A", year: 2020, genres: ["Action", "Adventure"] };
  const movieB = { title: "Movie B", year: 2018, genres: ["Comedy", "Drama"] };

  it("should correctly sort movies by year", () => {
    const result = sortByYearDescending(movieA, movieB);
    expect(result).to.be.below(0); // Movie A (2020) should come before Movie B (2018)
  });
  

//   it("should correctly sort movies by title, ignoring articles", () => {
//     const result = sortByTitleIgnoringArticles(
//       { title: "The Movie X", year: 2010, genres: ["Fantasy"] },
//       { title: "An Awesome Movie", year: 2025, genres: ["Adventure"] }
//     );
//     console.log("Result:", result);
//     expect(result).to.be.below(0); 
//   });
  
  
});
