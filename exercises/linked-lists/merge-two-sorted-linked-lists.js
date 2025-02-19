function mergeSortedLists(node1, node2) {
  // ---- Without dummy variable ----
  // if (node2 === null) return node1;
  // if (node1 === null) return node2;
  // let head;
  // if (node1.val < node2.val) {
  //   head = node1;
  //   node1 = node1.next;
  // } else {
  //   head = node2;
  //   node2 = node2.next;
  // }
  // let current = head;
  let prefixNode = new ListNode(0);
  let current = prefixNode;
  while (node1 !== null || node2 !== null) {
    if (node1 === null) {
      current.next = node2;
      break;
    }
    if (node2 === null) {
      current.next = node1;
      break;
    }
    if (node1.val < node2.val) {
      current.next = node1;
      current = current.next;
      node1 = node1.next;
    } else {
      current.next = node2;
      current = current.next;
      node2 = node2.next;
    }
  }
  // return head;
  return prefixNode.next;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}
function printLinkedList(head) {
  let current = head;
  let listStr = '';
  while (current !== null) {
    listStr += current.val + ' -> ';
    current = current.next;
  }
  listStr += 'null';
  console.log(listStr);
}

let list1 = createLinkedList([1, 3, 5]);
let list2 = createLinkedList([2, 4, 6]);
printLinkedList(mergeSortedLists(list1, list2)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

let list3 = createLinkedList([1, 2, 3]);
let list4 = createLinkedList([]);
printLinkedList(mergeSortedLists(list3, list4)); // Expected: 1 -> 2 -> 3 -> null

let list5 = createLinkedList([]);
let list6 = createLinkedList([1]);
printLinkedList(mergeSortedLists(list5, list6)); // Expected: 1 -> null

let list7 = createLinkedList([1, 5, 9]);
let list8 = createLinkedList([2, 4, 6, 8, 10]);
printLinkedList(mergeSortedLists(list7, list8)); // Expected: 1 -> 2 -> 4 -> 5 -> 6 -> 8 -> 9 -> 10 -> null

let list9 = createLinkedList([1, 2, 5]);
let list10 = createLinkedList([3, 6, 7]);
printLinkedList(mergeSortedLists(list9, list10)); // Expected: 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> null