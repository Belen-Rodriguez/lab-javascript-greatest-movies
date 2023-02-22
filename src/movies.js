// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const dirArray = moviesArray.map(films => films.director)
    return dirArray;
    console.log(dirArray);
}
getAllDirectors(movies)


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const SteSpiMovies = moviesArray.filter(moviesArray => {return (moviesArray.director === 'Steven Spielberg' && moviesArray.genre.includes("Drama"))}) 
    return SteSpiMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const scoresArray = moviesArray.map (eachFilm => eachFilm.score)
    console.log(scoresArray)
    
    const totalScore = scoresArray.reduce((acumulator,currentValue) => {
      return acumulator + currentValue
    });
    
    let avgScore = totalScore/scoresArray.length;
    return Math.round((avgScore + Number.EPSILON)*100)/100
 }

  let printScore =  scoresAverage(movies);
  console.log(printScore);


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    //const filmsByGen = moviesArray.map(eachFilm => eachFilm.genre)
    
    const draMov = moviesArray.filter(moviesArray => moviesArray.genre.includes("Drama"));
    console.log(draMov);
    console.log(draMov.length)
    
    const dramScrArray = draMov.map (eachFilm => eachFilm.score)
    console.log(dramScrArray)
    console.log(dramScrArray.length)
    
    const totDraScore = dramScrArray.reduce((acumulator,currentValue) => {
      return acumulator + currentValue
    });
  
    let avgDraSco = totDraScore/dramScrArray.length;

    if (draMov === []){return 0}
    else {
     return Math.round((avgDraSco + Number.EPSILON)*100)/100}
  }
    
  
  let printDramaScore =  dramaMoviesScore(movies);
  console.log(printDramaScore);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

moviesArray.sort((x,y) => {
  if (x.year === y.year){
    return x.title.localeCompare(y.title)
 }
    return (x.year - y.year);
  });
  
const olderMov = moviesArray.map (moviesArray => moviesArray);

  //console.log(olderMov)
  return olderMov
}

let printOldYear =  orderByYear(movies);
console.log(printOldYear);


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  // version ordenando array de objetos -->
  /*let orderAlphMov = moviesArray.sort((x,y) => {
    return x.title.localeCompare(y.title)
  });
  return orderAlphMov */

  const titlesArray = moviesArray.map ((eachFilm) => eachFilm.title);

  let orderAlphMov = titlesArray.sort();
  
  let twentyOrdMov = orderAlphMov.slice(0,20);
  
  return twentyOrdMov
}

  let printAlphab =  orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

  

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
