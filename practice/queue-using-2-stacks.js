// Algorithm
// Push: push element to empty stack, then push all elements of non empty stack
// Pop: pop non empty stack

class MyQueue {
  constructor() {
      this.stack1 = [];
      this.stack2 = [];
  }

  push(x) {
      if (this.stack1.length === 0) {
        this.stack1.push(x);
        while(this.stack2.length > 0) {
          this.stack1.push(this.stack2.pop());
        }
      } else {
        this.stack2.push(x);
        while(this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
  }

  pop() {
    if (this.stack1.length > 0) {
      return this.stack1.pop();
    } else {
      return this.stack2.pop();
    }
  }

  peek() {
    if (this.stack1.length > 0) {
      return this.stack1[this.stack1.length - 1];
    } else {
      return this.stack2[this.stack2.length - 1];
    }
  }

  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

// Test cases
let queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek());  // Expected output: 1
console.log(queue.pop());   // Expected output: 1
console.log(queue.empty()); // Expected output: false