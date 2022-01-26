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

function removeDuplicatesFromLinkedList(linkedList) {
    let original = linkedList;
    while (original !== null) {
        let distinct = original.next;

        while (distinct !== null && distinct.value === original.value) {
            distinct = distinct.next;
        }

        original.next = distinct;
        original = distinct;
    }
    return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;


const remove = new LinkedList(1).addMany([3,10,10,10,1,1,2,2]);


console.log(remove.getNodesInArray());
const list3 = removeDuplicatesFromLinkedList(remove);
console.log(list3.getNodesInArray());