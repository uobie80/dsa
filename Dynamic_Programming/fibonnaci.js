//Use memoization technique to improve running time of algorithm from O(2^n) to O(n).

const fib = (n, memo = {}) => {
    //base case
    if (n in memo) return memo[n];
    if (n == 1 || n == 2) return 1;
    //recursive case
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

console.log(fib(5));
console.log(fib(55));