


console.assert(JSON.stringify(movies) === moviesJSON, {
  message: "WARNING - movies dataset has has been modified!!",
})

console.assert(JSON.stringify(movieDetails) === movieDetailsJSON, {
  message: "WARNING - movieDetails dataset has been modified!!",
})