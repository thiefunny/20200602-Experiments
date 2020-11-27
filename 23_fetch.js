// console.log(fetch('https://opentdb.com/api.php?amount=10'))

fetch('https://opentdb.com/api.php?amount=10')
    .then(response => response.json())
    .then(result => {
        console.log(result.results[0].question)
    })
