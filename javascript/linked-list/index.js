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

  append(newValue) {
    /* Adds a new node with the given value to the end of the list. */
    const newNode = new Node(newValue);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  insertBefore(value, newValue) {
    /* Adds a new node with the given new value immediately before the first node that has the specified value. */
    const newNode = new Node(newValue);

    if (!this.head) {
      throw new Error("The list is empty.");
    }

    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        if (current.next.value === value) {
          newNode.next = current.next;
          current.next = newNode;
          return;
        }
        current = current.next;
      }
      throw new Error(`The value ${value} is not found in the list.`);
    }
  }

  insertAfter(value, newValue) {
    /* Adds a new node with the given new value immediately after the first node that has the specified value. */
    const newNode = new Node(newValue);

    if (!this.head) {
      throw new Error("The list is empty.");
    }

    let current = this.head;
    while (current) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    throw new Error(`The value ${value} is not found in the list.`);
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

  kthFromEnd(k) {
    if (k < 0 || !Number.isInteger(k)) {
      throw new Error("k must be a positive integer.");
    }

    let slow = this.head;
    let fast = this.head;


    for (let i = 0; i < k; i++) {
      if (fast === null) {
        throw new Error("k is greater than the length of the linked list.");
      }
      fast = fast.next;
    }

    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow.value;
  }
}

module.exports = LinkedList;
