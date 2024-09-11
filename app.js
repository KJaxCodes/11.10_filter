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