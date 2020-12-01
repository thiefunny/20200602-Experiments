const titleEl = document.querySelector('title');
const imgEl = document.querySelector('img');
const mainEl = document.querySelector('main');

const URL_END_POINT = "https://api.themoviedb.org/3/"
const SEARCH_TYPE = `keyword/7376/movies`
const URL_API_KEY = `?api_key=db59a7858683873689962abfe2676567&query=`
const SEARCH_QUERY = `&page=1`
const SEARCH_QUERY_PAGE = `&page=`

const URL = `${URL_END_POINT}${SEARCH_TYPE}${URL_API_KEY}${SEARCH_QUERY}`;
const URL_PAGES = `${URL_END_POINT}${SEARCH_TYPE}${URL_API_KEY}${SEARCH_QUERY_PAGE}`;

let moviesArr = [];

const render = _ => {
    let movieDetailsArr = new Array;
    moviesArr.forEach(elem => {
        let movie = {
            title: elem.title,
            posterURL: `https://image.tmdb.org/t/p/w185/${elem.poster_path}`
        }
        movieDetailsArr.push(movie);
    })
    let html = ''
    movieDetailsArr.forEach(elem => {
        html += `
        <div class="wrapper">
        <img src="${elem.posterURL}" alt="" class="img">
        <p class="title">${elem.title}</p>
        </div>
        `
    })
    mainEl.innerHTML = html;
}

const masakruj = input => {
    let inputArr = input.map(elem => elem.results)
    inputArr.forEach(elem => elem.forEach(elem => moviesArr.push(elem)))
    return moviesArr
}

fetch(URL)
    .then((response) => response.json())
    .then((result) => {
        let promisesArr = new Array;
        for (let j = 0; j < result.total_pages; j++) {
            promisesArr.push(fetch(`${URL_PAGES}${j+1}`))
        }
        Promise.all(promisesArr).then(responses => {
                return Promise.all(responses.map(response => response.json()))
            })
            .then(result => {
                masakruj(result);
                // console.log(moviesArr);
                render();

            })
            .catch(err => console.log(err))

    });