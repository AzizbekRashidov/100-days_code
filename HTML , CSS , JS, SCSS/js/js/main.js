const list = document.querySelector('.list') 

function getPost(array, node) {
    node.innerHTML = null

    array.forEach(element => {
        
        const newli = document.createElement('li')
        const newImg = document.createElement("img")
        


        newli.textContent = element.Title
        newImg.src = element.Poster

        node.appendChild(newImg)
        node.appendChild(newli)
    });
}

const API_KEY = 'c7ac8201';

async function films(){
    const films = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=films`);
    const lorem = await films.json()

    getPost(lorem.Search, list)
}

films()