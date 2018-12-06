console.log("Starting App..");

setTimeout(() => {
    console.log("Inside of Callback");
}, 2000);

setTimeout(() => {
    console.log("Inside second timeout");
}, 0);

console.log("Stopping App..");