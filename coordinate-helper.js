const fetch = require("node-fetch");
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const fs = require("fs");

const answerRecievedAndGenerate = (answers) => {
  fetchCoOrdinates(answers.whichAddress).then((response) => {
    if (response) {
      let fetchFormattedData = response;
      if (answers.whichFromat != "osm-addresses-default") {
        fetchFormattedData = getformattedCordinates(
          response,
          answers.howManyRows,
          answers.whichFromat,
          answers.whichDatabase
        );
      }
      writeToJsonFile(fetchFormattedData);
      console.log("Data generated successfully!");
    } else {
      console.log("No data found for this address!!");
    }
  });
};

const fetchCoOrdinates = (address) => {
  return fetch(
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      address
    )}&format=json`
  )
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
};

const getformattedCordinates = (
  data,
  numberOfRows,
  whichFromat = "",
  whichDatabase = ""
) => {
  let finalDataSet = [];
  const latitude = data[0].lat;
  const longitude = data[0].lon;
  for (let i = 0; i < numberOfRows; i++) {
    // Generate a random distance (in kilometers) and angle
    const distance = Math.random() * 10;
    const angle = Math.random() * Math.PI * 2;
    // Calculate the new latitude and longitude based on the distance and angle
    const lat = parseFloat(latitude) + (distance / 111.325) * Math.cos(angle);
    const lon =
      parseFloat(longitude) +
      (distance / (111.325 * Math.cos(parseFloat(latitude)))) * Math.sin(angle);
    if (whichFromat == "only-co-ordinates") {
      finalDataSet.push([lon, lat]);
    } else if (whichFromat == "database-specific-co-ordinates") {
      if (whichDatabase == "MongoDB") {
        finalDataSet.push({
          _id: { $oid: new ObjectId() },
          location: { coordinates: [+lon, +lat], type: "Point" },
          //   name: (+new Date() * Math.random()).toString(36).substring(0, 6), //if you want to
        });
      }
    }
  }
  return finalDataSet;
};

const writeToJsonFile = (data, fileName = "data") => {
  data = JSON.stringify(data);
  return fs.writeFileSync(`${fileName}.json`, data);
};

module.exports = { answerRecievedAndGenerate };
