// You are provided with an array of planet objects. Each object has 
// three properties: **`name`**, **`temperature`** (in degrees Kelvin), 
// and **`distance`** from the Sun (in astronomical units - AU).

// Your task is to filter out planets based on the following criteria for potential habitability:

// - The temperature is between 253 K and 323 K, inclusive.
// - The distance from the Sun is between 0.75 and 1.5 AU, inclusive.

// Print the new array containing the names of the planets that match the criteria.

const planets = [
    { name: "Mercury", temperature: 440, distance: 0.39 },
    { name: "Venus", temperature: 737, distance: 0.72 },
    { name: "Earth", temperature: 288, distance: 1 },
    { name: "Mars", temperature: 253, distance: 1.5 },
    { name: "Jupiter", temperature: 163, distance: 5.2 },
    { name: "Saturn", temperature: 133, distance: 9.58 },
    { name: "Uranus", temperature: 78, distance: 19.22 },
    { name: "Neptune", temperature: 73, distance: 30.05 }
];

const habitablePlanets = planets.filter(function (planet) {             //create variable to hold new array of habitable planets
    return planet.temperature >= 253 && planet.temperature <= 323 &&    //return planets in habitable temp range
        planet.distance >= 0.75 && planet.distance <= 1.5;              //AND planets in habitable distance range
});

console.log(habitablePlanets);                                          //print new array

//0: {name: 'Earth', temperature: 288, distance: 1}
//1:{name: 'Mars', temperature: 253, distance: 1.5}




// planets.filter(function (value, idx, arr) {
//     return value.temperature >= 253 && value.temperature <= 323;
// })


// planets.filter(function(value, idx, arr){
//     return value.distance >= 0.75 && value.distance <= 1.5;
// })