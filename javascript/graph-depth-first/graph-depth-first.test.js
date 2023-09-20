const { Graph } = require("./graph-depth-first");

describe("Graph", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();

    const nodeA = graph.addNode("A");
    const nodeB = graph.addNode("B");
    const nodeC = graph.addNode("C");
    const nodeD = graph.addNode("D");
    const nodeE = graph.addNode("E");
    const nodeF = graph.addNode("F");
    const nodeG = graph.addNode("G");
    const nodeH = graph.addNode("H");

    graph.addEdge(nodeA, nodeB);
    graph.addEdge(nodeA, nodeC);
    graph.addEdge(nodeB, nodeG);
    graph.addEdge(nodeC, nodeD);
    graph.addEdge(nodeC, nodeE);
    graph.addEdge(nodeD, nodeH);
    graph.addEdge(nodeE, nodeF);
  });

  test("Depth First Traversal - Starting from Node A", () => {
    const traversalResult = graph.depthFirst(nodeA);
    expect(traversalResult).toEqual(["A", "B", "G", "C", "D", "H", "E", "F"]);
  });

  test("Depth First Traversal - Starting from Node C", () => {
    const traversalResult = graph.depthFirst(nodeC);
    expect(traversalResult).toEqual(["C", "A", "B", "G", "D", "H", "E", "F"]);
  });

  test("Depth First Traversal - Starting from Node H", () => {
    const traversalResult = graph.depthFirst(nodeH);
    expect(traversalResult).toEqual(["H", "D", "C", "A", "B", "G", "E", "F"]);
  });

  test("Depth First Traversal - Starting from Node F", () => {
    const traversalResult = graph.depthFirst(nodeF);
    expect(traversalResult).toEqual(["F", "E", "C", "A", "B", "G", "D", "H"]);
  });

  test("Depth First Traversal - Starting from Node X (non-existent)", () => {
    const nonExistentNode = new Node("X");
    const traversalResult = graph.depthFirst(nonExistentNode);
    expect(traversalResult).toEqual([]);
  });
});
