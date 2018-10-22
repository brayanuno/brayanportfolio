let filmTitle = document.querySelector("#movieTitle");

let filmProducer = document.querySelector("#producerTitle");

let filmDirector = document.querySelector("#directorTitle");

let planetName = document.querySelector("#planetsTitle");


// titles films
fetch('https://swapi.co/api/films/')
 .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    myJson.results.forEach((film) => {
    let itemList = document.createElement('li')
    itemList.textContent = film.title
    filmTitle.appendChild(itemList)
  })
  
});

//films producers
fetch('https://swapi.co/api/films/')
 .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    myJson.results.forEach((film) => {
    let itemProducer = document.createElement('li')
    itemProducer.textContent = film.producer
    filmProducer.appendChild(itemProducer)
  })
  
});

//films directors
import {films} from '/assets/film.js'

films.forEach((film) => {
    let directorList = document.createElement('li')
    directorList.textContent = film.director
    filmDirector.appendChild(directorList)
});


//Planets names
import {planets} from '/assets/planets.js'

planets.forEach((planet) => {
    let planetList = document.createElement('li')
    planetList.textContent = planet.name
    planetName.appendChild(planetList)
})