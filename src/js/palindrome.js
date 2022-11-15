import showResult from "./result.js"

function checkPalindrome(word) {
    const wordLen = word.length
    const halfWord = Math.floor(wordLen / 2)
    let isPalindrome = true;
    
    for (let i = 0; i < halfWord; i++) {
        if (word[i] !== word[wordLen - 1 - i]) {
            isPalindrome = false;
            break
        }
    }

    return isPalindrome ? `${word} es un palindromo` : `${word} no es un palindromo`
}

function initPalindrome() {
    const palindromeEl = document.querySelector(".palindrome")
    const inputEl = palindromeEl.querySelector("input")
    const buttonEl = palindromeEl.querySelector("button")
    
    buttonEl.addEventListener("click", function() {
        const inputValue = inputEl.value.trim()
        const isPalindrome = inputValue && checkPalindrome(inputValue)

        showResult(palindromeEl, isPalindrome)
    })
}

export default initPalindrome