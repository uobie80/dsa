// Implementation of a breadth first search (BFS) algorithm using a queue data structure

//Time: O(n)
//Space: O(n)


class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


const bfs = (node, target) => {
    const queue = [node];
    while (queue.length > 0) {
        const currNode = queue.shift();

        if (currNode.val === target) {
            return true;
        }

        if (currNode.left !== null) {
            queue.push(currNode.left);
        }
        if (currNode.right !== null) {
            queue.push(currNode.right);
        }
    }
    return false;
};


console.log(bfs(a, "b"));
console.log(bfs(a, "c"));
console.log(bfs(a, "t"));