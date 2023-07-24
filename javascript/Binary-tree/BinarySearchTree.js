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
      console.error("Binary search tree is empty.");
    }

    let current = this.root;
    while (current.right) {
      current = current.right;
    }

    return current.value;
  }
}
module.exports = BinarySearchTree;
