// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  addMany(values) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    for (const value of values) {
      current.next = new LinkedList(value);
      current = current.next;
    }
    return this;
  }

  getNodesInArray() {
    const nodes = [];
    let current = this;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }
}

function reverseLinkedList(head) {
  // Write your code here.
  let one = null;
  let two = head;

  while (two !== null) {
    let three = two.next;
    two.next = one;
    one = two;
    two = three;
  }

  return one;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.reverseLinkedList = reverseLinkedList;

const list2 = new LinkedList(1).addMany([3, 4, 5, 9, 10]);

console.log(list2.getNodesInArray());
const list3 = reverseLinkedList(list2);
console.log(list3.getNodesInArray());
