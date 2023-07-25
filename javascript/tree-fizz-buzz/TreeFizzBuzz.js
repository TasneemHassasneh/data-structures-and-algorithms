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
