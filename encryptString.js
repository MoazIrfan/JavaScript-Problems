function encrypt(input) {
    if (!input) return ""
    let result = '';
    let count = 1;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
            count++
        }
        else {
            result += count + input[i]
            count = 1
        }

    }
    return result;
}

const input = "aabbbcdda";
const encrypted = encrypt(input);
console.log(encrypted); // Output: "2a3b1c2d1a"