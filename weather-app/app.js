const request = require("request");
console.log("Starting App..");

request({
    url: "https://geocoder.api.here.com/6.2/geocode.json?app_id=sTjsNxHbP5iA1wrE4Hhe&app_code=w09dWGaLvp02-XmFcTRX1A%20&searchtext=29+Hana+Edison",
    json: true
}, (error, response, body) => {
    //console.log(JSON.stringify(body, undefined, 2));
    //console.log(JSON.stringify(response));
    console.log(JSON.stringify(body.Response.View[0].Result[0].Location.NavigationPosition[0], undefined, 2));
})

console.log("Stopping App..");