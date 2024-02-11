// A stack is a LIFO (Last in first out) data structure
// Useful for tracking a history of steps i.e. browsing history
// Stack implementation using a linked list

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(val) {
        if (this.size === 0) {
            this.top = new Node(val);
        } else {
            const pushNode = new Node(val);
            pushNode.next = this.top;
            this.top = pushNode;
        }
        this.sixe++;
    }

    pop() {
        if (this.size === 0) return null;
        const poppedNode = this.top;
        this.top = this.top.next;
        return poppedNode.val;
    }

    getTop() {
        return this.top.val;
    }
}

const myStack = new Stack();
myStack.push("1");
myStack.push("2");
myStack.push("3");
myStack.push("4");

console.log(mystack.size());
