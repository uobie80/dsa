
// Time: O(m^2 * n)
// Space: O(m^2)
const countConstruct = (target, wordlist, memo = {}) => {
    if (target in memo) return memo[target];
    //base case
    if (target === '') return 1;

    let totalCount = 0;

    //recursive case
    for (let word of wordlist) {
        if (target.indexOf(word) === 0) {
            numWays = countConstruct(target.slice(word.length), wordlist, memo);
            totalCount += numWays;
        }
    }
    memo[target] = totalCount;
    return totalCount;
};



//testcases
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));