"use strict";

const Stack = require("../stack/stack");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("should push a value to the top of the stack and return it when peeked", () => {
    stack.push("A");
    expect(stack.peek()).toBe("A");
  });

  it("should pop a value from the top of the stack", () => {
    stack.push("A");
    stack.push("B");
    expect(stack.pop()).toBe("B");
    expect(stack.peek()).toBe("A");
  });

  it("should throw an error when pop is called on an empty stack", () => {
    expect(() => stack.pop()).toThrow(Error);
    expect(() => stack.pop()).toThrow("The Stack is Empty!!!");
  });

  it("should return null when peek is called on an empty stack", () => {
    expect(stack.peek()).toBeNull();
  });

  it("should return true for isEmpty when the stack is empty", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it("should return false for isEmpty when the stack is not empty", () => {
    stack.push("A");
    expect(stack.isEmpty()).toBe(false);
  });

  it("should maintain the correct length when pushing and popping values", () => {
    expect(stack.length).toBe(0);
    stack.push("A");
    stack.push("B");
    expect(stack.length).toBe(2);
    stack.pop();
    expect(stack.length).toBe(1);
    stack.pop();
    expect(stack.length).toBe(0);
  });
});
