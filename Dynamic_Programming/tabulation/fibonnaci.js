//Fibonnaci sequence using tabulation approach.

//Time: O(n)
//Space: O(n)

const fib = (n) => {
    const list = Array(n + 1).fill(0);
    list[1] = 1;
    for (let idx = 0; idx <= n; idx++) {
        list[idx + 1] += list[idx];
        list[idx + 2] += list[idx]
    }
    return list[n];
};


//testcases
console.log(fib(6));
console.log(fib(8));
console.log(fib(9));
console.log(fib(90));