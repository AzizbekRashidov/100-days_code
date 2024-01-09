const list = document.querySelector('.list') 

function getPost(array, node) {
    node.innerHTML = null

    array.forEach(element => {
        
        const newli = document.createElement('li')


        newli.textContent = element.body

        node.appendChild(newli)
    });
}

// Promise

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((response) => response.json())
// .then(data => {
//     if(data.length > 0) {
//         getPost(data, list)
//     }
// })


// ASYNC function 

// async function films() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json()

//     if(data.length > 0){
//         getPost(data, list)
//     }
    
// }

// films()


// IIF 

// (async function () {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json()

//     if(data.length > 0){
//         getPost(data, list)
//     }
    
// })();
