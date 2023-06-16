"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    if (this.head === null) {
      return "NULL";
    }

    let current = this.head;
    let linkedListStr = "";
    while (current !== null) {
      linkedListStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    linkedListStr += "NULL";
    return linkedListStr;
  }
}

module.exports = LinkedList;
