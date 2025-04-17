function findSmallestMissingPositive(A) {

    const positiveSet = new Set(A.filter(x => x > 0))

    for (let i = 1; i < A.length + 1; i++) {
        if (!positiveSet.has(i)) {
            return i;
        }
    }

    return A.length + 1
}


// Test cases
const array1 = [1, 3, 6, 5, 4, 1, 2];
const array2 = [1, 2, 3];
const array3 = [-1, -3];

console.log("Smallest missing positive for array1:", findSmallestMissingPositive(array1)); // Output: 5
