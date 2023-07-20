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

  findMax() {
    if (!this.root) {
      console.error("Binary tree is empty.");
    }

    let max = this.root.value;

    const traversal = (node) => {
      if (node.value > max) {
        max = node.value;
      }
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
    };

    traversal(this.root);
    return max;
  }
}



module.exports = BinaryTree;
