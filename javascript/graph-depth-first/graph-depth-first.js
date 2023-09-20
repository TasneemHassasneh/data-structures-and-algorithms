const Node = require("./Node");

class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(value) {
    const node = new Node(value);
    this.nodes.push(node);
    return node;
  }

  addEdge(node1, node2) {
    node1.neighbors.push(node2);
    node2.neighbors.push(node1);
  }

  depthFirst(startNode) {
    const visited = new Set();
    const result = [];

    function dfsHelper(node) {
      visited.add(node);
      result.push(node.value);

      for (const neighbor of node.neighbors) {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      }
    }

    dfsHelper(startNode);
    return result;
  }
}

module.exports = Graph;
