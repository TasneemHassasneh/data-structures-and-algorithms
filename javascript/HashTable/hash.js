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
