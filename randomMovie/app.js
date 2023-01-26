
const btn = document.querySelector('#btn');
const form = document.querySelector('#searchForm');
const body = document.querySelector('body');
const ul = document.querySelector('#picture')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
    makeImages(res.data)
    form.elements.query.value = '';
    makeTitle(res.data)
    console.log(res.data)

})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            img.setAttribute("id", "picture");
            document.body.append(img);
            btn.addEventListener("click", () => img.remove());
        }
    }
}

// const makeTitle = (names) => {
//     for (let result of names) {
//         if (result.show.name) {
//             const title = document.createElement('h3');
//             text = result.show.name;
//             title.setAttribute("id", "text");
//             title.textContent = text;
//             document.body.append(title);
//             console.log(text.concat(' '));
//             btn.addEventListener("click", () => title.remove());
//         }
//     }
// }


































// const form = document.querySelector('#searchform');
// form.addEventListener('submit', async function (e) {
//     e.preventDefault();
//     const searchTerm = form.elements.query.value;
//     const config = { params: { q: searchTerm } }
//     const res = await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=808fe48cf514ee19bf33af69bcbcfce6`, config);
//     makeImages(res.data)
//     form.elements.query.value = '';
// })

// const makeImages = (shows) => {
//     for (let result of shows) {
//         if (result.show.image) {
//             const img = document.createElement('IMG');
//             img.src = result.show.image.medium;
//             document.body.append(img);
//             console.log(result.show.name)
//         }
//     }
// }