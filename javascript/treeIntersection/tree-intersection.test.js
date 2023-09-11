
const Node = require('./Node'); 
const tree_intersection = require('./tree-intersection'); 

describe('tree_intersection', () => {
  it('should return an array of common values between two trees', () => {
    const tree1 = new Node(1);
    tree1.left = new Node(2);
    tree1.right = new Node(3);

    const tree2 = new Node(2);
    tree2.left = new Node(3);
    tree2.right = new Node(4);

    const result = tree_intersection(tree1, tree2);

    expect(result).toEqual([2, 3]);
  });

  it('should handle empty trees', () => {
    const tree1 = null; 
    const tree2 = new Node(2);
    tree2.left = new Node(3);
    tree2.right = new Node(4);

    const result = tree_intersection(tree1, tree2);


    expect(result).toEqual([]);
  });

  it('should handle trees with no common values', () => {
    const tree1 = new Node(1);
    tree1.left = new Node(2);
    tree1.right = new Node(3);

    const tree2 = new Node(4);
    tree2.left = new Node(5);
    tree2.right = new Node(6);

    const result = tree_intersection(tree1, tree2);

    expect(result).toEqual([]);
  });
});
