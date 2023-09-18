"use strict";

const CityGraph = require('./cityGraph');

describe("CityGraph", () => {
  let cityGraph;

  beforeEach(() => {
    cityGraph = new CityGraph();

    // Add test data to the graph
    cityGraph.addEdge("Metroville", "Pandora", 82);
    cityGraph.addEdge("Arendelle", "New Monstropolis", 42);
    cityGraph.addEdge("New Monstropolis", "Naboo", 73);
    cityGraph.addEdge("Narnia", "Arendelle", 37);
    cityGraph.addEdge("Arendelle", "Naboo", 78);
  });

  describe("isTripPossible", () => {
    it("should return true for a valid trip", () => {
      expect(isTripPossible(cityGraph, ["Metroville", "Pandora"])).to.be.true;
      expect(isTripPossible(cityGraph, ["Arendelle", "New Monstropolis", "Naboo"])).to.be.true;
    });

    it("should return false for an invalid trip", () => {
      expect(isTripPossible(cityGraph, ["Naboo", "Pandora"])).to.be.false;
      expect(isTripPossible(cityGraph, ["Narnia", "Arendelle", "Naboo"])).to.be.false;
    });
  });

  describe("calculateTripCost", () => {
    it("should return the correct cost for a valid trip", () => {
      expect(calculateTripCost(cityGraph, ["Metroville", "Pandora"])).to.equal(82);
      expect(calculateTripCost(cityGraph, ["Arendelle", "New Monstropolis", "Naboo"])).toEqual(115);
    });

    it("should return null for an invalid trip", () => {
      expect(calculateTripCost(cityGraph, ["Naboo", "Pandora"])).to.be.null;
      expect(calculateTripCost(cityGraph, ["Narnia", "Arendelle", "Naboo"])).to.be.null;
    });
  });
});
