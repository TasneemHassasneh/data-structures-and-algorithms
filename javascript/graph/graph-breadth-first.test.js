
const Graph = require('./graph-breadth-first'); 
describe('Graph', () => {
  it('should perform breadth-first traversal correctly', () => {
    const graph = new Graph();

    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');

    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'D');
    graph.addEdge('D', 'A');

    const bfsResult = graph.breadthFirst('A');

    const expectedResult = ['A', 'B', 'D', 'C'];

    expect(bfsResult).toEqual(expectedResult);
  });

});
