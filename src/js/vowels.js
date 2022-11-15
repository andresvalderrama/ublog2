import showResult from "./result.js"

const vowels = {
    a: 0,
    e: 1,
    i: 2,
    o: 3,
    u: 4,
}

function checkVowelss(phrase) {
    const vowelsInPhrase = Array.from(phrase).reduce(function(acc, curr, i) {
        const vowel = curr.toLowerCase()
        if (vowels[vowel] !== undefined) acc[vowels[vowel]] = vowel

        return acc
    }, [0, 0, 0, 0, 0])

    const listVowels = vowelsInPhrase.filter(function(el) {return el !== 0}).join(", ")

    return `${listVowels} ${listVowels.length === 1 ? "aparece" : "aparecen"} en la frase.`
}

export default function initVowels() {
    const vowelsEl = document.querySelector(".vowels")
    const inputEl = vowelsEl.querySelector("input")
    const buttonEl = vowelsEl.querySelector("button")
    
    buttonEl.addEventListener("click", function() {
        const inputValue = inputEl.value.trim()
        const vowels = inputValue && checkVowelss(inputValue)

        showResult(vowelsEl, vowels)
    })
}