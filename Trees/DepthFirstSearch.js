// Implementation of a depth first search (DFS) algorithm using a stack data structure

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


const dfs = (node, target) => {
    const stack = [node];
    while (stack.length > 0) {
        const currNode = stack.pop();

        if (currNode.val === target) {
            return true;
        }
        if (currNode.right !== null) {
            stack.push(currNode.right);
        }

        if (currNode.left !== null) {
            stack.push(currNode.left);
        }

    }
    return false;
};


console.log(dfs(a, "b"));
console.log(dfs(a, "c"));
console.log(dfs(a, "t"));