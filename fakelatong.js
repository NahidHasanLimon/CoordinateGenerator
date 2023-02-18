// Enter the name of the country or region you want to generate random coordinates for
const fetch = require('node-fetch');
const fs = require("fs")
const mongodb =  require ('mongodb')
const ObjectId = mongodb.ObjectId;
const place = "Dhanmondi, Dhaka";
let randomCordinates = [];
let customObj = [];
console.log('object is: ', customObj)
// Use geocoding API to get the latitude and longitude of the place
let fetchAndGenrate = fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(place)}&format=json`)
  .then(response => response.json())
  .then(results => {
    const latitude = results[0].lat;
    const longitude = results[0].lon;

    // Generate 10 random coordinates within a radius of 10 kilometers from the center
    for (let i = 0; i < 10; i++) {
        // Generate a random distance (in kilometers) and angle
        const distance = Math.random() * 10;
        const angle = Math.random() * Math.PI * 2;

        // Calculate the new latitude and longitude based on the distance and angle
        const lat = parseFloat(latitude) + (distance / 111.325) * Math.cos(angle);
        const lon = parseFloat(longitude) + (distance / (111.325 * Math.cos(parseFloat(latitude)))) * Math.sin(angle);




        // randomCordinates.push(lon,lat)
        curCordinates = [ +lon,+lat]
        customObj.push({
            "_id":{"$oid": new ObjectId()},
            "location":{"coordinates":curCordinates,"type":"Point"},
            "name":"Morris Park Bake Shop"
        })

        
        console.log( `sl ${i} :  ${lat}, ${lon}`);
    }
  });
  
  console.log('here we go: ', fetchAndGenrate);


  fetchAndGenrate.then((response) => {
    console.log('randomCordinates:  ', randomCordinates)
    console.log('customObj', customObj)
    const data = JSON.stringify(customObj)

    fs.writeFileSync('mongodb.json', data);
  })
