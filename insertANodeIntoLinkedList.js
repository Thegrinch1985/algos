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

function insertANodeIntoLinkedList(linkedList, data, position) {
  let one = linkedList;
  let temp = null;
  let count = 0;
  let newNode = new LinkedList(data);

  while (one !== null && count < position) {
    count++;
    one = one.next;
  }
  if (count == position) {
    temp = one;
    one = newNode;
    one.next = temp;
    count++;
  }
  return one;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.insertANodeIntoLinkedList = insertANodeIntoLinkedList;

const remove = new LinkedList(1).addMany([2, 3, 4, 5]);

// console.log(remove.getNodesInArray());c
const list3 = insertANodeIntoLinkedList(remove, 99, 4);
console.log(list3.getNodesInArray());
