const inputBinary = document.getElementById("input-binary")
const inputDecimal = document.getElementById("input-decimal")
const btn = document.getElementById("btn")

btn.addEventListener("click", (event) => {

    let binary = inputBinary.value
    let output = parseInt(binary, 2)

    inputDecimal.value = output
})

inputBinary.addEventListener("keypress", (event) => {

    let value = inputBinary.value

    value = value.replace(/[^01]/g, "")
    value = value.slice(0, 7)

    inputBinary.value = value
})