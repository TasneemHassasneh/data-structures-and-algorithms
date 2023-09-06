# Challenge Title: Tree Intersection Challenge

## Description:

You are given two binary trees, tree1 and tree2. Your task is to implement the tree_intersection function that finds the set of values that are common in both trees.

## code : 
``` javascript

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

```

## Test :

``` javascript
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

const tree2 = new TreeNode(2);
tree2.left = new TreeNode(3);
tree2.right = new TreeNode(4);

const result = tree_intersection(tree1, tree2);
console.log(result); // Output: [2, 3]
```

