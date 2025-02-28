/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// Algorithm
// 1 = remove last node, 2 = 2nd to last, etc
// Iterate over list once to count how many nodes there are
// Iterate over list a second time to remove nth node from end
// Keep track of prev and cur
// If cur = nth from end, prev.next = cur.next
// Return head

function removeNthFromEnd(head, n) {
  let dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;
  let cur = head;
  let indexToRemove = getLength(head) - n; // 0 indexed
  for (let idx = 0; idx < indexToRemove; idx += 1) {
    prev = cur;
    cur = cur.next;
  }
  prev.next = cur.next;
  return dummy.next;
}

function getLength(head) {
  let length = 0;
  while (head !== null) {
    head = head.next;
    length += 1;
  }
  return length;
}

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to create a linked list from an array
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
      current.next = new ListNode(val);
      current = current.next;
  }
  return dummy.next;
}

// Helper function to convert a linked list to an array
function listToArray(head) {
  let arr = [];
  let current = head;
  while (current) {
      arr.push(current.val);
      current = current.next;
  }
  return arr;
}

// Test cases
console.log(listToArray(removeNthFromEnd(arrayToList([1,2,3,4,5]), 2))); // Expected output: [1,2,3,5]
console.log(listToArray(removeNthFromEnd(arrayToList([1]), 1))); // Expected output: []
console.log(listToArray(removeNthFromEnd(arrayToList([1,2]), 1))); // Expected output: [1]
console.log(listToArray(removeNthFromEnd(arrayToList([1,2]), 2))); // Expected output: [2]