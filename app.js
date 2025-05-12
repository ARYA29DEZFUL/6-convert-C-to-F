let $ = document

let CONVERTButton = $.getElementById("CONVERT")
let RESETButton = $.getElementById("RESET")
let CHANGEButton = $.getElementById("CHANGE")

let textToChange = $.getElementById("textToChange")
let inputValue = $.getElementById("inputValue")
let resultText = $.getElementById("result")

let flag = false

CHANGEButton.addEventListener("click", () => {
    resultText.classList.add("result-reset")
    if (flag) {
        textToChange.innerHTML = "℃ to ℉"
        inputValue.placeholder = "℃"
        flag = false
    } else {
        textToChange.innerHTML = "℉ to ℃"
        inputValue.placeholder = "℉"
        flag = true
    }
})

RESETButton.addEventListener("click", () => {
    resultText.classList.add("result-reset")
    inputValue.value = ""
})

CONVERTButton.addEventListener("click", () => {
    resultText.classList.remove("result-reset")

    //F = (1.8 × C) + 32

    if (Number(inputValue.value)) {

        flag ? resultText.innerText = (1.8 * Number(inputValue.value) + 32) : resultText.innerText = (Number(inputValue.value) - 32) * 5 / 9

        resultText.classList.remove("result-alert")
    } else {
        resultText.innerText = "... The entered value is invalid ! ..."
        resultText.classList.add("result-alert")
    }
})