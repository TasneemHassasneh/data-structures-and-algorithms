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
}

function zipLists(list1, list2) {
  if (!list1.head) {
    return list2.head;
  }
  if (!list2.head) {
    return list1.head;
  }

  let current1 = list1.head;
  let current2 = list2.head;
  while (current1 && current2) {
    let next1 = current1.next;
    let next2 = current2.next;

    current1.next = current2;
    current2.next = next1;

    current1 = next1;
    current2 = next2;
  }

  return list1.head;
}

// Test case 1
const list1 = new LinkedList();
list1.insert(1);
list1.insert(3);
list1.insert(2);

const list2 = new LinkedList();
list2.insert(5);
list2.insert(9);
list2.insert(4);

const zippedList = zipLists(list1, list2);

// Print the zipped list
let current = zippedList;
while (current) {
  console.log(current.value + " -> ");
  current = current.next;
}
console.log("null");

