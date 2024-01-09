let elMovis = document.querySelector (".movis")

function rederMovis (_pokemons ) {
elMovis.innerHTML = null
    for (let i = 0; i < _pokemons.length; i++) {
        
        // Create pokemons 
        let newLi = document.createElement ('li')
        let newimg = document.createElement ('img')
        let newheading = document.createElement ('h2')
        let newparagrf = document.createElement ('p')
        let her = document.createElement('hr')
        let agr = document.createElement ('p')
        let agrr = document.createElement ('p')
        let newUl = document.createElement ('ul')

        // set attribut
        newLi.setAttribute('class', 'item')
        her.setAttribute ('class', 'liner')
        agr.setAttribute('class', 'age d-flex')
        agrr.setAttribute('class', 'agee')
        newimg.setAttribute('src',  _pokemons[i].img)
        newimg.setAttribute('alt', _pokemons[i].candy + ", poster")
        newimg.setAttribute('width', 157)
        newimg.setAttribute('height', 157)
        newheading.setAttribute('class', 'heading')
        newparagrf.setAttribute('class', 'paragrf')
        newUl.setAttribute('class' ,'listli')

        // TextContent
        newheading.textContent = _pokemons[i].name
        newparagrf.textContent = _pokemons[i].candy
        agr.textContent = _pokemons[i].weight
        agrr.textContent = _pokemons[i].height

        newLi.appendChild(newimg)
        newLi.appendChild(her)
        newLi.appendChild(newheading)
        newLi.appendChild(newparagrf)
        newLi.appendChild(agr)
        newLi.appendChild(agrr)
        newLi.appendChild(newUl)
        elMovis.appendChild(newLi)  
    }
}


rederMovis(pokemons, elMovis);

var elKun = document.querySelector(".kun")
var elBtn = document.querySelector(".btn")

elBtn.addEventListener("click", function(evt){
    evt.preventDefault()

    elKun.classList.toggle("tun")
})