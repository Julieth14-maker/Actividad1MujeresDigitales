let firstName = "Pepe";
let age = 25;
let price = 99.90;
let favoriteSeries = ["Dark","Mr Robot","Castlevania"]; 
let favoriteMovies = [
    {
        "movie": "El Origen",
        "date": 2010,
        "characters" : ["Dominick", "Ariadne", "Mal"]
    },
    {
        "movie": "Parásitos",
        "date": 2019,
        "characters" : ["Da Hye", "Moon Gwang", "Park Dong Ik"]
    },
    {
        "movie": "Harry Potter",
        "date": 2001,
        "characters" : ["Harry", "Ron", "Hermione"]
    }          
]

console.log("Nombre:", firstName)
console.log("Edad:", age)
console.log("Precio:", "$" + price)
console.log("")
console.log("Series favoritas:")

for (let i = 0; i < favoriteSeries.length; i++){
console.log(favoriteSeries[i])
}

console.log("")
console.log("Películas favoritas:")
console.log("")
favoriteMovies.forEach (movieInfo => {
    console.log(movieInfo.movie)
    console.log(movieInfo.date)
    console.log("Personajes")
    for (let j = 0; j < movieInfo.characters.length; j++){
        console.log(movieInfo.characters[j])
    }
    console.log("")
})

let currentAge = 28;
console.log("Edad Actual:", currentAge, "años");
currentAge++;
console.log("Edad el próximo año:", currentAge, "años");
console.log("")

favoriteSeries.push("Game of thrones");
console.log(`Series Favoritas: ${favoriteSeries.join(", ")}`);

