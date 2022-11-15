const loadingState = {
    NOT_STARTED: "no iniciada",
    LOADING: "cargando",
    COMPLETED: "completada"
}

async function fetchContent(url) {
    const response = await fetch(url)
    const responseText = await response.text()
    const responeHeaders = response.headers.entries()

    return [responseText, responeHeaders]
}

export default function initAJAX() {
    const vowelsEl = document.querySelector(".ajax")
    const loadingEl = document.querySelector(".loading")
    const inputEl = vowelsEl.querySelector("input")
    const responseEl = vowelsEl.querySelector(".response")
    const headersEl = vowelsEl.querySelector(".headers")
    const buttonEl = vowelsEl.querySelector("button")

    inputEl.value = location.href
    
    buttonEl.addEventListener("click", async function() {
        loadingEl.innerHTML = loadingState.LOADING

        const inputValue = inputEl.value.trim()
        const [response, headers] = await fetchContent(inputValue)
        loadingEl.innerHTML = loadingState.COMPLETED

        responseEl.value = response
        
        for (const [headerKey, headerVal] of headers) {
            headersEl.value += `${headerKey}: ${headerVal}\n`
        }
    })
}