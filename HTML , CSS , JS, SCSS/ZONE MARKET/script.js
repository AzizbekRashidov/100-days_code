const elList = document.querySelector('.render__list')
const elTemplate = document.querySelector('#template').content

function RenderWords(array){
    array.forEach((brend) => {
        const TemplateBrends = elTemplate.cloneNode(true)
        TemplateBrends.querySelector('.render__h2').textContent = brend.title
        TemplateBrends.querySelector('.render__text').textContent = brend.text

        elList.appendChild(TemplateBrends)
    })
}

RenderWords(brends)