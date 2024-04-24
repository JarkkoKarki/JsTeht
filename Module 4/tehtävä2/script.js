const form = document.querySelector("form");
const query = document.querySelector("#query");

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query.value}`)
    if (response.status === 200) {
        const shows = await response.json()
        console.log(shows)
    }
})
