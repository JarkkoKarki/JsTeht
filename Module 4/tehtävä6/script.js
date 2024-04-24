const form = document.querySelector("form");
const query = document.querySelector("#query");
const results = document.querySelector("#results");

async function getJoke(search) {
    results.innerHTML = "";
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${search}`);
        if (response.status === 200) {
            const jokes = await response.json();
            jokes.result.forEach((joke) => {
                Joke(joke);
            });
        } else {
            Error('Failed to load');
        }
    } catch (error) {
        console.error('error loading jokes', error)
    }
}

function Joke(joke) {
    const article = document.createElement("article");
    const paragraph = document.createElement('p');
    paragraph.textContent = joke.value;
    article.appendChild(paragraph);
    results.appendChild(article);
}

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    getJoke(query.value)
})