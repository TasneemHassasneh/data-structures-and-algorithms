## fizz buzz tree
* Arguments: k-ary tree
* Return: new k-ary tree

Determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:

* If the value is divisible by 3, replace the value with “Fizz”
* If the value is divisible by 5, replace the value with “Buzz”
* If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
* If the value is not divisible by 3 or 5, simply turn the number into a String.# Binary tree

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

### 2. TreeFizzBuzz.js

```javascript
"use strict";

const Node = require("./Node");

function fizzBuzzTree(root) {
  if (!root) return null;

  const queue = [root];
  const newRoot = new Node(convertToFizzBuzz(root.value));
  const newNodeMap = new Map();
  newNodeMap.set(root, newRoot);

  while (queue.length) {
    const currentNode = queue.shift();
    const newCurrentNode = newNodeMap.get(currentNode);

    for (const child of currentNode.children) {
      const newChild = new Node(convertToFizzBuzz(child.value));
      newCurrentNode.children.push(newChild);
      newNodeMap.set(child, newChild);
      queue.push(child);
    }
  }

  return newRoot;
}

function convertToFizzBuzz(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    return "FizzBuzz";
  } else if (value % 3 === 0) {
    return "Fizz";
  } else if (value % 5 === 0) {
    return "Buzz";
  } else {
    return String(value);
  }
}

```