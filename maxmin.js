function miniMaxSum(arr) {
    // Write your code here
    let min = arr[0];
    let max = arr[0];
    let sum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const num = arr[i]
        if (num < min) {
            min = num;
        } else if (num > max) {
            max = num;
        }
        sum += num;
    }
    const minSum = sum - max;
    const maxSum = sum - min;
    console.log(minSum, maxSum)


}


miniMaxSum([1, 2, 4, 5, 6, 9]);