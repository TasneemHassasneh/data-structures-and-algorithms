"use strict";

class CityGraph {
  constructor() {
    this.graph = {};
  }

  addEdge(source, destination, cost) {
    if (!this.graph[source]) {
      this.graph[source] = {};
    }
    this.graph[source][destination] = cost;
  }

  getCost(source, destination) {
    if (this.graph[source] && this.graph[source][destination]) {
      return this.graph[source][destination];
    }
    return null;
  }
}

function isTripPossible(graph, cities) {
  for (let i = 0; i < cities.length - 1; i++) {
    const source = cities[i];
    const destination = cities[i + 1];
    if (graph.getCost(source, destination) === null) {
      return false;
    }
  }
  return true;
}

function calculateTripCost(graph, cities) {
  let cost = 0;
  for (let i = 0; i < cities.length - 1; i++) {
    const source = cities[i];
    const destination = cities[i + 1];
    const edgeCost = graph.getCost(source, destination);
    if (edgeCost === null) {
      return null;
    }
    cost += edgeCost;
  }
  return cost;
}

module.exports = CityGraph;