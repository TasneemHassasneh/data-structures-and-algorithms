# Hash table

## Description:

A Hashtable class in JavaScript. This class should include methods to handle key-value pairs, handling collisions, and performing various operations on the stored data.

## Features:

* Method: set

    1. Arguments: key, value
    2. Action: Hashes the key to find an index and stores the key-value pair in the table.
    If the key already exists, replaces its value with the provided value.

* Method: get

    1. Arguments: key
    2. Returns: Value associated with the provided key in the table.
    Searches for the key in the table and returns its associated value.

* Method: has

    1. Arguments: key
    2. Returns: Boolean indicating whether the key exists in the table.
    Checks if the key is present in the table and returns true if found, false otherwise.

* Method: keys

    1. Returns: Collection of keys stored in the table.
    2. Retrieves and returns all keys stored in the table.
* Method: hash

    1. Arguments: key
    2. Returns: Index in the collection for the provided key.
    Implements a hash function to convert a key into an index for storage.

## Implementation Overview:

The Hashtable class is implemented to manage key-value pairs using a hash function for indexing. The set method hashes the key to find an index, handles collisions, and stores the key-value pairs in arrays. The get method retrieves values by searching for the provided key. The has method checks for key existence. The keys method compiles and returns all keys. The hash method converts keys into index values using a basic hashing algorithm.

## Code :

``` javascript
class Hashtable {
  constructor() {
    this.table = new Array(100); 
  }

  set(key, value) {
    const index = this.hash(key); 
    if (!this.table[index]) {
      this.table[index] = []; 
    }


    for (const item of this.table[index]) {
      if (item[0] === key) {
        item[1] = value;
        return;
      }
    }

  
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (const item of this.table[index]) {
        if (item[0] === key) {
          return item[1];
        }
      }
    }
    return undefined; 
  }

  has(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (const item of this.table[index]) {
        if (item[0] === key) {
          return true; 
        }
      }
    }
    return false; 
  }

  keys() {
    const allKeys = [];
    for (const items of this.table) {
      if (items) {
        for (const item of items) {
          allKeys.push(item[0]); 
        }
      }
    }
    return allKeys;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

}


```
