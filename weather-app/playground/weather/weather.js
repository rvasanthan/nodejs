const request = require("request");

module.exports.getWeather = (address, latitude, longitude, callback) => {

    request({
        url : `https://api.darksky.net/forecast/f2227cc14d9ea3721cdb9692009a87f7/${latitude},${longitude}`,
        json : true
    }, (error, response, body) => {
        if(error) {
            callback("Error Occured while retrieving the weather");
        } else if(response.statusCode === 400) {
            console.log("Unexpected erroe while reri")
            callback("Unexpected erroe while rretrieving the weather.");
        } else if(response.statusCode === 200) {
            console.log(JSON.stringify(body.currently.temperature));
            callback(undefined, {
                address: address,
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
                weatherSummary: body.currently.summary
            });
        }
    }
    );

}