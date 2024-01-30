//Recursive algorithm that finds the numbers that sum up to the target number given an array of integers.
//This algorithm uses dynamic programming to find the solution.

// Time: O(n * m^2)
// Space: O(m^2)
const target_sum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const result = target_sum(remainder, numbers, memo);
        if (result !== null) {
            memo[targetSum] = [...result, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}


console.log(target_sum(7, [2, 3]));
console.log(target_sum(300, [7, 14]));
