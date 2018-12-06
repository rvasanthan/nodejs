console.log("Starting App..");

var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Vasanth'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(791, (userObject) => {
    console.log(userObject);
});

console.log("Stopping App..");