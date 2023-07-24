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
