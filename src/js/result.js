export default function showResult(rootEl, answer) {
    if (!answer) return

    const resultTmp = `<span>${answer}</span> <button>x</button>`
    const divEl = document.createElement("div")
    divEl.innerHTML = resultTmp

    const buttonEl = divEl.querySelector("button")

    buttonEl.addEventListener("click", function () {
        divEl.remove()
    })

    rootEl.children[1] 
        ? rootEl.children[1].replaceWith(divEl)
        : rootEl.append(divEl)
}