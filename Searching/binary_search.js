//Binary search is a divide-and-conquer algorithm used to efficiently 
// locate a target value within a sorted collection (e.g., an array or a list).

//Time: O(log n)
//Space: O(1)

const binary_search = (array, target) => {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (target === array[mid]) {
            return mid;
        } else if (target < array[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};


console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 24));
