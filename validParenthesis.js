function isValidParentheses(s) {
    const stack = []; // Using an array as a stack
    const openingSet = new Set(['(', '{', '[']); // Set to check for opening parentheses
    const parenthesesMap = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (const char of s) {
        if (openingSet.has(char)) {
            // If the character is an opening parenthesis, push it onto the stack
            stack.push(char);
        } else {
            // If the character is a closing parenthesis
            const lastOpened = stack.pop(); // Pop the top element from the stack

            // Check if the popped opening parenthesis matches the expected opening parenthesis
            if (parenthesesMap[char] !== lastOpened) {
                return false; // Mismatched parentheses
            }
        }
    }

    // The string is valid if the stack is empty (all parentheses are matched)
    return stack.length === 0;
}
