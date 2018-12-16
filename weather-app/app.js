const request = require("request");
const yargs = require("yargs");
const geocode = require('./playground/geocode/geocode');
const weather = require('./playground/weather/weather');

console.log("Starting App..");

const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address for which we need the weather information for.',
        string: true
    }
})
.help().alias('help', 'h')
.argv;

geocode.geoCodeRequest(argv.a, (error, result) => { 
    if(error) {
        console.log("There is an error and here is the error message "+ error);
    } else{
        console.log("Here is the result "+ JSON.stringify(result, undefined, 2));
        weather.getWeather(result.address, result.latitude, result.longitude, (errorMessage, results) => {
            if(errorMessage) {
                console.log("Error while retrieving the Weather");
            } else {
                //console.log("Here us the Weather Information"+ JSON.stringify(result, undefined, 2));
                console.log(JSON.stringify(results, undefined,2));
            }
        });
    }
});

//f2227cc14d9ea3721cdb9692009a87f7
//  
console.log("Stopping App..");