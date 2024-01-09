const elInput = document.querySelector(".input")
const elInput1 = document.querySelector(".input1")
const elBtn = document.querySelector(".link")
const elh2 = document.querySelector(".users__h2")
const elPass = document.querySelector(".users__password")

elBtn.addEventListener("click", () => {
    const Input = elInput.value.trim()
    const Input1 = elInput1.value.trim()

    elh2.textContent = Input
    elPass.textContent = Input1
})