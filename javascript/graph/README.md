# Graph Implementation in JavaScript

This JavaScript code defines a `Graph` class for representing a graph data structure.

## code : 

``` javascript
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

```
