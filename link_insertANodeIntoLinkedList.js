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


function insertNodeAtPosition(head, data, position) {
  let count = 0
  let node

  if (!head) {
    node = {data, next: null}
    return node
  }
  
  node = head

  while (node) {
    if (count === position - 1) {
      const prevNode = node
      const newNode = {data:data, next: prevNode.next}
      prevNode.next = newNode
      return head
   }
   node = node.next
   count++
  }

  return null
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.insertNodeAtPosition = insertNodeAtPosition;

const remove = new LinkedList(1).addMany([2, 3, 4, 5]);

// console.log(remove.getNodesInArray());c
const list3 = insertNodeAtPosition(remove, 99, 1);
console.log(list3.getNodesInArray());
