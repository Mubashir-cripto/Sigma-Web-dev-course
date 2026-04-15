
// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

// .includes() checks if a character exists inside the vowels string — it works on both strings and arrays:


function vowelCounter(str) {
    let vowels = "aeiouAEIOU";
    let count = 0

    for (let i = 0; i < str.length; i++) {

        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(vowelCounter("Mobi Cash Hello New Users!"));