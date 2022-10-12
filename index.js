const message = document.querySelector('#message')

const addMovie = event => {
    event.preventDefault()
    
    let inputField = document.querySelector('input')

    const movie = document.createElement('li')

    let movieTitle = document.createElement('span')
    movieTitle.addEventListener('click', crossOffMovie)
    movieTitle.textContent = inputField.value

    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'

    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
}

document.querySelector('form').addEventListener('submit', addMovie)

const deleteMovie = event => {
    event.target.parentNode.remove()

    message.textContent = 'Movie deleted!'
}

const crossOffMovie = event => {
    event.target.classList.toggle('.checked')

    if (event.target.classList.contains('.checked')) {
        message.textContent = 'Movie Watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}

