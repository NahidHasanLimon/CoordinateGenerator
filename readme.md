
# Coordinates Generator

Its a simple interactive CLI App! This Node.js application generates coordinates for a specific zone, country, or city using OpenStreetMap data, Inquirer JS. 


### Installation 
```bash
npm install
```
```bash
node index.js
```


### Usage 
#### Step 1: Enter Your Address
    ex; Dhaka, Bangladesh
#### Step 2: Enter Your Format
Only Coordinates: Allows the user to input a list of latitude and longitude pairs separated by commas. The application will validate the input and generate an output file with the coordinates. 
```[[-100.445882,39.7837304],[-100.445882,39.7837304], .....]```

OSM Addresses default: Allows the user to input an address, city, or country name and generate the corresponding coordinates using OpenStreetMap's Nominatim API. The application will validate the input and generate an output file with the coordinates.

Database Specific Coordinates: Allows the user to input a specific database and the number of longitude and latitude pairs they want to generate. The application will generate the specified number of coordinates using the given database and output them to a file.

#### Step 3: For Which Database [ If you choose "Database Specific Coordinates" ] 

Initially Only MongoDB allowed ! Geospatial Data! 
```{
    location: {
        type: "Point",
        coordinates: [-73.856077, 40.848447]
    },
    name: "Morris Park Bake Shop"
    }
```

    
In future I will include MySQL and PostgreSQL. 

#### Step 4: How Many Rows [pair] you want [If OSM Default not choosen]
ex; 10,20,100 .....



