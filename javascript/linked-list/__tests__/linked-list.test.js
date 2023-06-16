'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('LinkedList', () => {

  it('works', () => {
    expect(true).toBeTruthy();
  });

  // Test 1: Can successfully instantiate an empty linked list
  it('can instantiate an empty linked list', () => {
    const emptyList = new LinkedList();
    expect(emptyList.head).toBeNull();
  });

  // Test 2: Can properly insert into the linked list
  it('can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    expect(list.toString()).toBe('{ a } -> NULL');
  });

  // Test 3: The head property will properly point to the first node in the linked list
  it('head property points to the first node', () => {
    const list = new LinkedList();
    list.insert('a');
    expect(list.head.value).toBe('a');
  });

  // Test 4: Can properly insert multiple nodes into the linked list
  it('can properly insert multiple nodes', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.toString()).toBe('{ c } -> { b } -> { a } -> NULL');
  });

  // Test 5: Will return true when finding a value within the linked list that exists
  it('returns true when value exists in the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.includes('b')).toBe(true);
  });

  // Test 6: Will return false when searching for a value in the linked list that does not exist
  it('returns false when value does not exist in the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.includes('d')).toBe(false);
  });

  // Test 7: Can properly return a collection of all the values that exist in the linked list
  it('can return a collection of all values in the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.toString()).toBe('{ c } -> { b } -> { a } -> NULL');
  });
});

