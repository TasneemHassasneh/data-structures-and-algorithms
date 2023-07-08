"use strict";

const Queue = require('../queue/queue');

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it("should enqueue a value and return it when peeked", () => {
    queue.enqueue("A");
    expect(queue.peek()).toBe("A");
  });

  it("should dequeue a value from the front of the queue", () => {
    queue.enqueue("A");
    queue.enqueue("B");
    expect(queue.dequeue()).toBe("A");
    expect(queue.peek()).toBe("B");
  });

  it("should throw an error when dequeue is called on an empty queue", () => {
    expect(() => queue.dequeue()).toThrow(Error);
    expect(() => queue.dequeue()).toThrow("The Queue is Empty!!!!");
  });

  it("should return null when peek is called on an empty queue", () => {
    expect(queue.peek()).toBeNull();
  });

  it("should return true for isEmpty when the queue is empty", () => {
    expect(queue.isEmpty()).toBe(true);
  });

  it("should return false for isEmpty when the queue is not empty", () => {
    queue.enqueue("A");
    expect(queue.isEmpty()).toBe(false);
  });

  it("should maintain the correct length when enqueueing and dequeueing values", () => {
    expect(queue.length).toBe(0);
    queue.enqueue("A");
    queue.enqueue("B");
    expect(queue.length).toBe(2);
    queue.dequeue();
    expect(queue.length).toBe(1);
    queue.dequeue();
    expect(queue.length).toBe(0);
  });
});
