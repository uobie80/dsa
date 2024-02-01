//Problem: You are a traveler on a 2 dimension grid.  You begin in the top-let corner
// and your goal is to travel to the bottom-right corner of the grid.  
// You may only move down or right.
// In how many ways can you travel to the goal on a grid with dimensions m * n?
//Write a function grid_traveler(m, n) that calculates this.

//Time: O(m*n)
//Space: O(m*n)

const grid_traveler = (m, n) => {
    const list = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    list[1][1] = 1;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = list[i][j];
            if (j + 1 <= n) list[i][j + 1] += current;
            if (i + 1 <= m) list[i + 1][j] += current;
        }
    }
    return list[m][n];
};

console.log(grid_traveler(3, 2));
console.log(grid_traveler(10, 10));
console.log(grid_traveler(20, 20));
console.log(grid_traveler(100, 100));