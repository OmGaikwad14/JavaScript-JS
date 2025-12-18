// singleton
// Object.create


// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Vishal",
    "full name": "Vishal Ashok Babar",
    [mySym]: "myKey1",
    age: 20,
    location: "Mumbai",
    email: "vishal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Monday", "Tuesday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "vishal@gmail.com";

// Object.freeze(jsUser); not change value in object

jsUser.email = "vishal@microsoft.com";

console.log(jsUser);


jsUser.greeting = function () {
    console.log("Hello JS Usre");
}

jsUser.greetingTwo = function () {
    console.log(`Hello JS Usre, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());