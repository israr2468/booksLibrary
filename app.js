console.log('Fetching...')

const container = document.createElement('div')
container.setAttribute("id", "output")
document.body.append(container)

const title = document.createElement('h1')
title.innerHTML = 'Looking for a book? Look no further!'
document.body.append(title)

const input = document.createElement('input')
input.setAttribute("type", "text")
input.setAttribute("id", "typedInput")
document.body.append(input)


const btn = document.createElement('button')
btn.setAttribute("type", "button")
btn.setAttribute("value", "Search Book")
btn.innerHTML = 'Get Books'
document.body.appendChild(btn);


const typedInput = document.getElementById("typedInput");
btn.addEventListener('click', function (e) {
    e.preventDefault();
    getBooks();
    console.log(typedInput.value)
})


function getBooks() {
    document.getElementById('output').innerHTML= "";
    fetch(`https://openlibrary.org/search.json?q=${typedInput.value}`)
    .then(response => response.json())
    .then(data => {
        for (var i = 0; i < data.docs.length; i++) {
            document.getElementById("output").innerHTML+= 
            `
            <div 
            <div> Search Result ${i + 1} </div>
            <h3> ${data.docs[i].title} <h2> 
            <h4> Author: ${data.docs[i].author_name[0]} <h3>
            <br><img src='http://covers.openlibrary.org/b/isbn/${data.docs[i].isbn[0]}-M.jpg' alt='Image Not Found'><br>
            </div>
            `
        }
    })
}