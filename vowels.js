function countVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for (let i = 0; i < str.length; i++) {
        // Manually check if the character matches any vowel
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                count++;
                break; // Stop checking other vowels once a match is found
            }
        }
    }
    return count;
}

console.log(countVowels("i")); // Output will be 1
