// A permutation is a collection of items where the order matters.

//Time: O(n!)
//Space: O(n^2)

const permutations = (elements) => {

    if (elements.length === 0) return [[]];

    const firstEL = elements[0];
    const rest = elements.slice(1);
    const permsWithoutFirst = permutations(rest);
    const allPermutations = [];

    permsWithoutFirst.forEach(perm => {
        for (let i = 0; i <= perm.length; i++) {
            const permWithFirst = [...perm.slice(0, i), firstEL, ...perm.slice(i)];
            allPermutations.push(permWithFirst);
        }
    });
    return allPermutations;
};


console.log(permutations(['a', 'b', 'c', 'd']));