# Binary tree

## Node

* Node class that has properties for:
    1. the value stored in the node
    2. the left child node
    3. and the right child node.

## Binary Tree

* Binary Tree class, Define a method for each of the depth first traversals:

    1. pre order
    2. in order
    3. post order
Each depth first traversal method should return an array of values, ordered appropriately.

## Binary Search Tree

* Binary Search Tree class

*Sub-class of the Binary Tree Class,* with the following additional methods:

    1. Add
        * Arguments: value
        * Return: nothing
        Adds a new node with that value in the correct location in the binary search tree.
    
    2. Contains
        * Argument: value
        * Returns: boolean indicating whether or not the value is in the tree at least once.

## whiteboard

### 1. Node.js

``` JavaScript
'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

module.exports = Node;

```

### 2. BinaryTree.js

``` javascript
"use strict";

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Pre-order: root >> left >> right
  preOrder() {
    let array = [];
    const traversal = (node) => {
      array.push(node.value);
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
    };

    traversal(this.root);
    return array;
  }

  // Post-order: left >> right >> root
  postOrder() {
    let array = [];
    const traversal = (node) => {
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
      array.push(node.value);
    };

    traversal(this.root);
    return array;
  }
  // In-order: left >> root >> right
  inOrder() {
    let array = [];
    const traversal = (node) => {
      if (node.left) traversal(node.left);
      array.push(node.value);
      if (node.right) traversal(node.right);
    };

    traversal(this.root);
    return array;
  }
}



module.exports = BinaryTree;

```

### `BinarySearchTree.js

``` javascript
const BinaryTree = require("./BinaryTree");
const Node = require("./Node");

class BinarySearchTree extends BinaryTree {
  add(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    //check if the value is greater or less than the root
    // if greaterr check the right of the root
    //else check the left of the root node
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // Checks if a value exists in the binary search tree
  contains(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) {
        return true;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  findMax() {
    if (!this.root) {
      console.error('Binary search tree is empty.')
    }

    let current = this.root;
    while (current.right) {
      current = current.right;
    }

    return current.value;
  }
}
module.exports = BinarySearchTree;


```
