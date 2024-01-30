//Recursive algorithm that finds the numbers that sum up to the target number given an array of integers.


// Time: O(n^m * m)
// Space: O(m)
const target_sum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const result = target_sum(remainder, numbers);
        if (result !== null) {
            return [...result, num];
        }
    }
    return null;
}


console.log(target_sum(7, [2, 3]));

