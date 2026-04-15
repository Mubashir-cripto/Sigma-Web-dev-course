// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function passkeyValidator(passkey) {
    const minLength = passkey.length >= 8
    const hasUpperCase = /[A-Z]/.test(passkey);
    const hasLowerCase = /[a-z]/.test(passkey);
    const hasDigits = /[0-9]/.test(passkey)

    return minLength && hasUpperCase && hasLowerCase && hasDigits;
}

console.log(passkeyValidator("Mobii1234"));  // true
console.log(passkeyValidator("Hello1234"));  // true
console.log(passkeyValidator("hello123"));   // false (no uppercase)
console.log(passkeyValidator("HELLO123"));   // false (no lowercase)
console.log(passkeyValidator("HelloWorld")); // false (no digit)
console.log(passkeyValidator("Hi1")); 