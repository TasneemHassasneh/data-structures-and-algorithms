# Binary tree

## Node

* Node class that has properties for:
    1. the value stored in the node
    2. the left child node
    3. and the right child node.

## Tree Breadth First
* It's a function called breadth first
    1. Arguments: tree
    2. Return: list of all values in the tree, in the order they were encountered

* example:
![Binary tree](./binary-tree.png)

    * output: [2,7,5,2,6,9,5,11,4]

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

### 2. TreeBreadthFirst.js

```javascript


const Node = require("./Node");

function breadthFirst(tree) {
  if (!tree) {
    return [];
  }

  const result = [];
  const queue = [tree];

  while (queue.length) {
    const currentNode = queue.shift();
    result.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  return result;
}

const root = new Node(2);
root.left = new Node(7);
root.right = new Node(5);
root.left.left = new Node(2);
root.left.right = new Node(6);
root.right.right = new Node(9);

console.log(breadthFirst(root));


```