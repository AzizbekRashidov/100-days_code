const elTemplate = document.querySelector(".are__template").content
const elList = document.querySelector("#are__div")
const elInput = document.querySelector(".navbar__input")
const elBtn = document.querySelector(".navbar__search")

function RenderBrend(array){
    array.forEach((brend) => {
        var TemplateBrend = elTemplate.cloneNode(true)
        TemplateBrend.querySelector('.are__money').textContent = brend.release_date
        TemplateBrend.querySelector('.are__text').textContent = brend.overview
        TemplateBrend.querySelector('.are__buyurtma').textContent = brend.buyurtma

        elList.appendChild(TemplateBrend)
    })
}

RenderBrend(brends)

function SearchInput() {
    elList.innerHTML = null
    elList.classList.toggle("blok")

    const inputValue = elInput.value.trim()

    const search = new RegExp(inputValue, 'gi');

    const input = brends.filter((brend) => brend.title.match(search))

    RenderBrend(input, elList)
}

elBtn.addEventListener("click", SearchInput)

const elTemplate1 = document.querySelector(".about__template").content
const elDiv1 = document.querySelector(".about__div")

function RenderBrend1(array1){
    array1.forEach((brend1) => {
        const TemplateBrend1 = elTemplate1.cloneNode(true)
        TemplateBrend1.querySelector('.about__img').src = brend1.img
        TemplateBrend1.querySelector('.about__text').textContent = brend1.overview

        elDiv1.appendChild(TemplateBrend1)
    })
}

RenderBrend1(brend)


const elVivoDiv = document.querySelector(".vivo__div")
const elVivoTemplate = document.querySelector(".vivo__template").content
const elVivoBtn1 = document.querySelector(".vivo__button")
const elVivoH2 = document.querySelector(".vivo__h2")

function RenderBrends(vivo){
    vivo.forEach((brend) => {
        var TemplateBrends = elVivoTemplate.cloneNode(true)
        TemplateBrends.querySelector('.vivo__money').textContent = brend.release_date
        TemplateBrends.querySelector('.vivo__text').textContent = brend.overview
        TemplateBrends.querySelector('.vivo__buyurtma').textContent = brend.buyurtma

        elVivoDiv.appendChild(TemplateBrends)
    })
}

RenderBrends(brends)

function SearchInput1() {
    elVivoDiv.innerHTML = null
    elVivoDiv.classList.toggle("blok1")
    elVivoH2.style.display = "none"


    const inputValue1 = elInput.value.trim()

    const search1 = new RegExp(inputValue1, 'gi');

    const input1 = brends.filter((brend) => brend.title.match(search1))

    RenderBrends(input1, elList)
}

elBtn.addEventListener("click", SearchInput1)

const elNovaDiv = document.querySelector(".nova__div")
const elNovaTemplate = document.querySelector(".nova__template").content

function RenderNova(nova){
    nova.forEach((market) => {
        var TemplateNovaBrends = elNovaTemplate.cloneNode(true)
        TemplateNovaBrends.querySelector('.nova__img').src = market.img

        elNovaDiv.appendChild(TemplateNovaBrends)
    })
}

RenderNova(markets)

const eldiv = document.querySelector(".render__div")
const eltemplate = document.querySelector(".render__template").content

function RenderBrendlar(div){
    div.forEach((brendss) => {
        var TemplateBrends = eltemplate.cloneNode(true)
        TemplateBrends.querySelector('.render__img').src = brendss.img

        eldiv.appendChild(TemplateBrends)
    })
}

RenderBrendlar(brendlar)

const elHeartButton = document.querySelector(".header__button")
const elHeartLi = document.querySelector(".navbar__item1")
const elExit = document.querySelector(".nav__exit")

elHeartButton.addEventListener("click", () => {
    elHeartLi.classList.toggle("HeartLi")
})

elExit.addEventListener("click", () => {
    elHeartLi.classList.remove("HeartLi")
})

const elNavBtn = document.querySelector(".navbar__btn")
const elNavImg = document.querySelector(".navbar__btn__img")

elNavBtn.addEventListener("click", () => {
    elNavImg.setAttribute("src", "./img/exit.png")
})