const elInput = document.querySelector(".input")
const elTemplate = document.querySelector("#template").content
const elList = document.querySelector(".ul")

function RenderWords(array){
    array.forEach((words) => {
        var TemplateWord = elTemplate.cloneNode(true)
        TemplateWord.querySelector('.span').textContent = words.uz
        TemplateWord.querySelector('.span1').textContent = words.eng

        elList.appendChild(TemplateWord)
    })
}

RenderWords(word)

function SearchInput() {
    elList.innerHTML = null
    elList.classList.toggle("blok")

    const inputValue = elInput.value.trim()

    const search = new RegExp(inputValue, 'gi');

    const input = word.filter((words) => words.uz.match(search))

    RenderWords(input, elList)
}

elInput.addEventListener("input", SearchInput)