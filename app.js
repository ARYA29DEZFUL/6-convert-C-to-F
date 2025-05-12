let $ = document

let CONVERTButton = $.getElementById("CONVERT")
let RESETButton = $.getElementById("RESET")
let CHANGEButton = $.getElementById("CHANGE")

let textToChange = $.getElementById("textToChange")
let inputValue = $.getElementById("inputValue")
let resultText = $.getElementById("result")

let flag = false

CHANGEButton.addEventListener("click", () => {
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