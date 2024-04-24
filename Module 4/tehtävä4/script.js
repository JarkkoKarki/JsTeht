const form = document.querySelector("form");
const query = document.querySelector("#query");
const results = document.querySelector("#results");

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query.value}`)
    if (response.status === 200) {
        const shows = await response.json()
        results.innerHTML = "";
        shows.forEach((show) => {
            results.append(Responsees(show));
        })
    }
});

function Responsees(show) {
    const {name, url, summary} = show.show;
    const image = show.show.image?.medium;
    const card = document.createElement('article');
    const title = document.createElement('h2');
    const link = document.createElement('a');
    const img = document.createElement('img');
    const summaries = document.createElement('div');
    summaries.innerHTML = summary;
    card.classList.add("show-card");
    title.classList.add("show-title")
    link.classList.add("show-link");
    img.classList.add("show-image");
    summaries.classList.add("show-summary");
    img.src = image ? image : "https://via.placeholder.com/210x295?text=Not%20Found";
    title.textContent = name;
    link.href = url;
    link.target = "_blank";
    link.textContent = url;
    card.append(title, img, link, summaries);
    return card;
}