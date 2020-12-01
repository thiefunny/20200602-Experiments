const content = document.querySelector('p');

const URL_END_POINT = "https://api.themoviedb.org/3/"
const SEARCH_TYPE = `keyword/7376/movies`
const URL_API_KEY = `?api_key=db59a7858683873689962abfe2676567&query=`
const SEARCH_QUERY = `&page=1`
const SEARCH_QUERY_PAGE = `&page=`

// console.log(fetch('https://opentdb.com/api.php?amount=10'))

const URL = `${URL_END_POINT}${SEARCH_TYPE}${URL_API_KEY}${SEARCH_QUERY}`;
const URL2 = `${URL_END_POINT}${SEARCH_TYPE}${URL_API_KEY}${SEARCH_QUERY_PAGE}`;

let moviesArr = [];
const loopPopulate = _

const populateArr = _ => {
    return fetch(URL)
        .then(response => response.json())
        .then(result => {
            for (let i = 1; i < result.total_pages + 1; i++) {
                fetch(`${URL2}${i}`)
                    .then(response => response.json())
                    .then(result => {
                        result.results.forEach(movie => moviesArr.push(movie))
                    })
            }
        })
    }

populateArr().then(_ => {
    console.log(moviesArr)
});

// const 



// const populateArr = _ => {

//     fetch(URL)
//         .then(response => response.json())
//         .then(result => {
//             for (let i = 1; i < result.total_pages + 1; i++) {
//                 fetch(`${URL2}${i}`)
//                     .then(response => response.json())
//                     .then(result => {
//                         console.log(result)                        
//                         return result
//                     })
//             }
//         })
// }



// // const print = elem => {console.log(elem)}

// console.log(populateArr());

// let mymovie = {
//     title: '',
//     image: ''
// };
// moviesArr.forEach(movie => {
//     mymovie.title = movie.title;
//     mymovie.image = movie.poster_path;
// })