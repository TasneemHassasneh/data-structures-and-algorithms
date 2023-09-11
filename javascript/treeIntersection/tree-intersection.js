const Node = require("./Node");

function tree_intersection(tree1, tree2) {
  function traverseTreeAndStoreValues(node, hashmap) {
    if (node === null) return;
    hashmap[node.value] = true;
    traverseTreeAndStoreValues(node.left, hashmap);
    traverseTreeAndStoreValues(node.right, hashmap);
  }

  const valuesMap = {};
  traverseTreeAndStoreValues(tree1, valuesMap);

  function isValueInMap(node) {
    return valuesMap[node.value] !== undefined;
  }

  function findCommonValues(node, commonValues) {
    if (node === null) return;

    if (isValueInMap(node)) {
      commonValues.add(node.value);
    }

    findCommonValues(node.left, commonValues);
    findCommonValues(node.right, commonValues);
  }

  const commonValuesSet = new Set();

  findCommonValues(tree2, commonValuesSet);

  return Array.from(commonValuesSet);
}

const tree1 = new Node(1);
tree1.left = new Node(2);
tree1.right = new Node(3);

const tree2 = new Node(2);
tree2.left = new Node(3);
tree2.right = new Node(4);

const result = tree_intersection(tree1, tree2);
console.log(result); 

module.exports = tree_intersection;