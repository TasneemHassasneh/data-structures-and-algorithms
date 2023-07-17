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
