const fetch = require('node-fetch');
const mongodb =  require ('mongodb')
const ObjectId = mongodb.ObjectId;


const fetchCoOrdinates =  (address, numberOfRows, format) => {
    console.log('From fetch and gener', address);
    fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`)
        .then(response => response.json())
        // .then(results => {
        //    // cut
        // });
}
const coordinatesFormatting = (format)=>{
    if(format == 'MongoDB'){
        curCordinates = [ +lon,+lat]
        customObj.push({
            "_id":{"$oid": new ObjectId()},
            "location":{"coordinates":curCordinates,"type":"Point"},
            "name":"Morris Park Bake Shop"
        })
    }
}


module.exports = fetchCoOrdinates;




// console.log('From promise results', numberOfRows);
// const latitude = results[0].lat;
// const longitude = results[0].lon;

// // Generate 10 random coordinates within a radius of 10 kilometers from the center
// for (let i = 0; i < numberOfRows; i++) {
//     // Generate a random distance (in kilometers) and angle
//     const distance = Math.random() * 10;
//     const angle = Math.random() * Math.PI * 2;
//     // Calculate the new latitude and longitude based on the distance and angle
//     const lat = parseFloat(latitude) + (distance / 111.325) * Math.cos(angle);
//     const lon = parseFloat(longitude) + (distance / (111.325 * Math.cos(parseFloat(latitude)))) * Math.sin(angle);

//     // randomCordinates.push(lon,lat)
//     console.log( `sl ${i} :  ${lat}, ${lon}`);
// }