// Recursive solution which takes O(n^2) time and O(n) space

const sum = (arr) => {

    if (arr.length === 0) return 0;

    const subArray = arr.slice(1);
    return arr[0] + sum(subArray);
};

console.log(sum([10, -5, 8, 90, 1000, -200, -300, 50, 70, 4000]));

// Optimized recursive solution which takes O(n) time and O(n) space

const enhanced_sum = (arr) => {
    return _enhanced_sum(arr, 0);
};


const _enhanced_sum = (arr, begin) => {
    if (begin === arr.length) return 0;
    return arr[begin] + _enhanced_sum(arr, begin + 1);
};

console.log(enhanced_sum([10, -5, 8, 90, 1000, -200, -300, 50, 70, 4000]));



//Test running time of both recursive algorithms
const data = new Array(8000).fill(1);

const start = Date.now();
console.log(sum(data));
const end = Date.now();
console.log(`n^2 finished in  ${end - start} milliseconds (ms)`);


const _start = Date.now();
console.log(enhanced_sum(data));
const _end = Date.now();
console.log(`n finished in  ${_end - _start} milliseconds (ms)`);