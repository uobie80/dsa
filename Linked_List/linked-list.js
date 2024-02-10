//Implementation of singly linked list data structure

// Time: O(n)
// Space: O(1)
// Insert: O(1)  -> the insert operation itself not the search for the value
// Remove: O(1)  -> the remove operation itself not the search for the value
// Contains: O(n)
// to_string: O(n)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(val) {
        if (this.head === null) {
            this.head = new Node(val);
            return;
        }

        //Loop until the tail of node is reached
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        // Assign new value at the end of the linked list
        curr.next = new Node(val);
    }

    remove(head, target) {
        //Handle edge case of deleting head node of the linked list
        if (head.val === target) {
            return head.next;
        }

        let prev = null;
        let curr = head;

        while (curr !== null) {
            if (curr.val === target) {
                prev.next = curr.next;
            }
            prev = curr;
            curr = curr.next;
        }

    }

    contains(target) {
        let curr = this.head;
        while (curr !== null) {
            if (curr.val === target) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }

    to_string() {
        let str = "";
        let curr = this.head;
        while (curr !== null) {
            str += curr.val + ' -> ';
            curr = curr.next;
        }
        console.log(str);
    }

}



//tests
const myLinkedList = new LinkedList();

myLinkedList.insert("1");
myLinkedList.insert("2");
myLinkedList.insert("3");
myLinkedList.insert("4");
myLinkedList.insert("5");
myLinkedList.insert("6");

console.log(myLinkedList.head);
console.log(myLinkedList.to_string());
console.log(myLinkedList.contains("2"));
myLinkedList.remove(myLinkedList.head, "2");
console.log(myLinkedList.contains("2"));
console.log(myLinkedList.to_string());
