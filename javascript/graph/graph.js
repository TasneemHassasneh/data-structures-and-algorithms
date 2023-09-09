class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(value) {
    if (!this.vertices.has(value)) {
      this.vertices.set(value, []);
    }
    return value;
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
      this.vertices.get(vertex1).push({ vertex: vertex2, weight });
      this.vertices.get(vertex2).push({ vertex: vertex1, weight }); 
    }
  }

  getVertices() {
    return Array.from(this.vertices.keys());
  }

  getNeighbors(vertex) {
    if (this.vertices.has(vertex)) {
      return this.vertices.get(vertex);
    } else {
      return [];
    }
  }

  size() {
    return this.vertices.size;
  }
}


const myGraph = new Graph();

myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addEdge("A", "B", 5);

console.log("Vertices:", myGraph.getVertices());
console.log("Neighbors of A:", myGraph.getNeighbors("A"));
console.log("Graph Size:", myGraph.size());
