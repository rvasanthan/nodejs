const request = require("request");

module.exports.geoCodeRequest = (address, callback) => {
    request({
    url: `https://geocoder.api.here.com/6.2/geocode.json?app_id=sTjsNxHbP5iA1wrE4Hhe&app_code=w09dWGaLvp02-XmFcTRX1A%20&searchtext=${encodeURIComponent(address)}`,
    json: true
    }, (error, response, body) => {
        if(error) {
            callback("Error Occured", undefined);
        } else {
            callback(undefined, {
                "address": body.Response.View[0].Result[0].Location.Address.Label,
                "latitude": body.Response.View[0].Result[0].Location.NavigationPosition[0].Latitude,
                "longitude": body.Response.View[0].Result[0].Location.NavigationPosition[0].Longitude
            });
        }
        //console.log(JSON.stringify(response));
        //console.log(JSON.stringify(body.Response.View[0].Result[0].Location.Address.Label), undefined, 2);
        //console.log(JSON.stringify(body.Response.View[0].Result[0].Location.NavigationPosition[0], undefined, 2));
    });
}