const BinarySearchTree = require('../BinarySearchTree');
const Node = require('../Node');

describe('Binary Search Tree', () => {
  let binarySearchTree;

  beforeEach(() => {
    binarySearchTree = new BinarySearchTree();
  });

  test('Can successfully instantiate an empty tree', () => {
    expect(binarySearchTree.root).toBeNull();
  });

  test('Can successfully instantiate a tree with a single root node', () => {
    const rootNode = new Node(5);
    binarySearchTree.root = rootNode;

    expect(binarySearchTree.root).toEqual(rootNode);
  });

  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    binarySearchTree.add(5);
    binarySearchTree.add(3);
    binarySearchTree.add(7);

    expect(binarySearchTree.root.value).toBe(5);
    expect(binarySearchTree.root.left.value).toBe(3);
    expect(binarySearchTree.root.right.value).toBe(7);
  });

  test('Can successfully return a collection from a pre-order traversal', () => {
    binarySearchTree.add(5);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(2);
    binarySearchTree.add(4);
    binarySearchTree.add(6);
    binarySearchTree.add(8);

    const expected = [5, 3, 2, 4, 7, 6, 8];
    expect(binarySearchTree.preOrder()).toEqual(expected);
  });

  test('Can successfully return a collection from an in-order traversal', () => {
    binarySearchTree.add(5);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(2);
    binarySearchTree.add(4);
    binarySearchTree.add(6);
    binarySearchTree.add(8);

    const expected = [2, 3, 4, 5, 6, 7, 8];
    expect(binarySearchTree.inOrder()).toEqual(expected);
  });

  test('Can successfully return a collection from a post-order traversal', () => {
    binarySearchTree.add(5);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(2);
    binarySearchTree.add(4);
    binarySearchTree.add(6);
    binarySearchTree.add(8);

    const expected = [2, 4, 3, 6, 8, 7, 5];
    expect(binarySearchTree.postOrder()).toEqual(expected);
  });
});
