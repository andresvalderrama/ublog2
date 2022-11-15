import showResult from "./result.js"

function checkGreatestNumber(number1, number2) {
    if (number1 < number2) {
        return `${number2} es mayor`
    } else if (number1 > number2) {
        return `${number1} es mayor`
    } else {
        return `${number1} y ${number2} son iguales`
    }
}

export default function initGreatestNumber() {
    const greatesNumberEl = document.querySelector(".greatestNumber")
    const [number1El, number2El] = greatesNumberEl.querySelectorAll("input")
    const buttonEl = greatesNumberEl.querySelector("button")

    buttonEl.addEventListener("click", function() {
        const number1 = number1El.value.trim()
        const number2 = number2El.value.trim()
        const greatestNumb = (number1 && number2) && checkGreatestNumber(number1, number2)

        showResult(greatesNumberEl, greatestNumb)
    })
}