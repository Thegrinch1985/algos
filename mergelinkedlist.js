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

function mergeLinkedLists(headOne, headTwo) {
    // Write your code here.
    let linkedlistOne = headOne;
    let linkedlistPrev = null;
    let linkedlistTwo = headTwo;

    while (linkedlistOne !== null && linkedlistTwo !== null) {

        if (linkedlistOne.value < linkedlistTwo.value) {
            linkedlistPrev = linkedlistOne;
            linkedlistOne = linkedlistOne.next
        } else {
            if (linkedlistPrev !== null) linkedlistPrev.next = linkedlistTwo;
            linkedlistPrev = linkedlistTwo;
            linkedlistTwo = linkedlistTwo.next;
            linkedlistPrev.next = linkedlistOne;
        }

    }
    if (linkedlistOne === null) linkedlistPrev.next = linkedlistTwo;
    return headOne.value < headTwo.value ? headOne : headTwo


}



// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.mergeLinkedLists = mergeLinkedLists;


const list1 = new LinkedList(2).addMany([6, 7, 8]);
const list2 = new LinkedList(1).addMany([3, 4, 5, 9, 10]);

console.log(list1.getNodesInArray());
console.log(list2.getNodesInArray());
const list3 = mergeLinkedLists(list1, list2);
console.log(list3.getNodesInArray());