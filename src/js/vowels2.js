import showResult from "./result.js"

const vowels = ["a", "e", "i", "o", "u"]

function checkVowels(phrase) {
    const vowelsCount = Array.from(phrase).reduce(function(acc, curr) {
        const vowel = curr.toLowerCase()

        if (vowels.includes(vowel)) {
            if (!acc[vowel]) acc[vowel] = 1
            else acc[vowel] += 1
        }

        return acc
    }, {})

    return JSON.stringify(vowelsCount)
}

export default function initVowels2() {
    const vowelsEl = document.querySelector(".vowels2")
    const inputEl = vowelsEl.querySelector("input")
    const buttonEl = vowelsEl.querySelector("button")
    
    buttonEl.addEventListener("click", function() {
        const inputValue = inputEl.value.trim()
        const vowels = inputValue && checkVowels(inputValue)

        showResult(vowelsEl, vowels)
    })
}