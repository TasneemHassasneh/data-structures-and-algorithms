'use strict';

//! Require our linked list implementation
const LinkedList = require('../index');

describe('LinkedList', () => {

  it('works', () => {
    expect(true).toBeTruthy();
  });

  // !Test 1: Can successfully instantiate an empty linked list
  it('can instantiate an empty linked list', () => {
    const emptyList = new LinkedList();
    expect(emptyList.head).toBeNull();
  });

  //! Test 2: Can properly insert into the linked list
  it('can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    expect(list.toString()).toBe('{ a } -> NULL');
  });

  //! Test 3: The head property will properly point to the first node in the linked list
  it('head property points to the first node', () => {
    const list = new LinkedList();
    list.insert('a');
    expect(list.head.value).toBe('a');
  });

  //! Test 4: Can properly insert multiple nodes into the linked list
  it('can properly insert multiple nodes', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.toString()).toBe('{ c } -> { b } -> { a } -> NULL');
  });

  //! Test 5: Will return true when finding a value within the linked list that exists
  it('returns true when value exists in the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.includes('b')).toBe(true);
  });

  //! Test 6: Will return false when searching for a value in the linked list that does not exist
  it('returns false when value does not exist in the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.includes('d')).toBe(false);
  });

  //! Test 7: Can properly return a collection of all the values that exist in the linked list
  it('can return a collection of all values in the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.toString()).toBe('{ c } -> { b } -> { a } -> NULL');
  });



  let linkedList;

  beforeEach(() => {
    //! Create a new linked list instance before each test
    linkedList = new LinkedList();
  });

  //! test 8: Add a node to the end of the linked list
  it('should add a node to the end of the linked list', () => {
    linkedList.append(1);
    expect(linkedList.toString()).toBe('{ 1 } -> NULL');
  });

  //! test 9: Add multiple nodes to the end of the linked list
  it('should add multiple nodes to the end of a linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });

  //! test 10: Insert a node before a node in the middle of the linked list
  it('should insert a node before a node located in the middle of a linked list', () => {
    linkedList.append(1);
    linkedList.append(3);
    linkedList.insertBefore(3, 2);
    expect(linkedList.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });

  //! test 11: Insert a node before the first node of the linked list
  it('should insert a node before the first node of a linked list', () => {
    linkedList.append(2);
    linkedList.insertBefore(2, 1);
    expect(linkedList.toString()).toBe('{ 1 } -> { 2 } -> NULL');
  });

  //! test 12: Insert a node after a node in the middle of the linked list
  it('should insert a node after a node in the middle of the linked list', () => {
    linkedList.append(1);
    linkedList.append(3);
    linkedList.insertAfter(1, 2);
    expect(linkedList.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });

  //! test 13: Insert a node after the last node of the linked list
  it('should insert a node after the last node of the linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.insertAfter(2, 3);
    expect(linkedList.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });
});

describe('kthFromEnd', () => {

    //! test 14: should return the node value that is k places from the tail of the linked list
  it('should return the node value that is k places from the tail of the linked list', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(8);
    ll.append(2);

    expect(ll.kthFromEnd(0)).toBe(2); // Tail element
    expect(ll.kthFromEnd(2)).toBe(3); // Middle element
  });

  //! test 15: should throw an error when k is greater than the length of the linked list
  it('should throw an error when k is greater than the length of the linked list', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(8);
    ll.append(2);

    expect(() => ll.kthFromEnd(6)).toThrow('k is greater than the length of the linked list.');
  });
  
  //! test 16: should throw an error when k is not a positive integer
  it('should throw an error when k is not a positive integer', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(8);
    ll.append(2);

    expect(() => ll.kthFromEnd(-1)).toThrow('k must be a positive integer.');
    expect(() => ll.kthFromEnd(1.5)).toThrow('k must be a positive integer.');
    expect(() => ll.kthFromEnd('2')).toThrow('k must be a positive integer.');
  });
  
//! test 16: should return the node value when the linked list size is 1 and k is 0
  it('should return the node value when the linked list size is 1 and k is 0', () => {
    const ll = new LinkedList();
    ll.append(1);

    expect(ll.kthFromEnd(0)).toBe(1);
  });

  //! test 16: should return the node value when k is in the middle of the linked list
  it('should return the node value when k is in the middle of the linked list', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(8);
    ll.append(2);
    ll.append(5);

    expect(ll.kthFromEnd(2)).toBe(8);
  });
});



