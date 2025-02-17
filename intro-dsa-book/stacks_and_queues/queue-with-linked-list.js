class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  peek() {
    // Returns the value of the top most element without removing it.
    // If the queue is empty, it returns `null`.
    return this.front ? this.front.val : null;
  }

  enqueue(val) {
    // Adds an item to the queue
    let newItem = new ListNode(val);
    if (this.front === null) {
      this.front = newItem;
      this.back = newItem;
    } else {
      this.back.next = newItem;
      this.back = newItem;
    }
  }

  dequeue() {
    // Removes the item from the queue and returns it
    // If the queue is empty, it returns `null`.
    if (this.front === null) return null;
    let removed = this.front;
    this.front = this.front.next;
    if (this.front === null) {
      this.back = null;
    }
    return removed.val;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
console.log('Front element:', myQueue.peek());  // logs 'Front element: 1'
myQueue.enqueue(2);
console.log('Front element:', myQueue.peek());  // logs 'Front element: 1'
myQueue.enqueue(3);
console.log('Front element:', myQueue.peek());  // logs 'Front element: 1'
myQueue.dequeue();
console.log('Front element after dequeue:', myQueue.peek());  // logs 'Front element after dequeue: 2'
myQueue.dequeue();
console.log('Front element after dequeue:', myQueue.peek());  // logs 'Front element after dequeue: 3'
myQueue.dequeue();
console.log('Peek on empty queue:', myQueue.peek());  // logs 'Peek on empty queue: null'
console.log('`back` on empty queue:', myQueue.back);  // logs '`back` on empty queue: null'