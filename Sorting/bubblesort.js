//Bubble sort compares two adjacent elements in a collection and swaps them untill 
//all the elements in the collection are in the correct order.

//Time: O(n^2)
//Space: O(1)

const bubblesort = (elements) => {
    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < elements.length - i - 1; j++) {
            if (elements[j] > elements[j + 1]) {
                let temp = elements[j];
                elements[j] = elements[j + 1];
                elements[j + 1] = temp;
            }
        }
    }
    return elements;
};


console.log(bubblesort([0, -3, -8, 20, 7, 3, 10, 4, 1]));