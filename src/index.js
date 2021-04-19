console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
function fetchDogs() {
    // To pass the tests, don't forget to return your fetch!
    return fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => json);

}