// const tinderUser = new Object() // Singleton
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Vamika";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Vishal",
            lastname: "Babar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "e", 6: "f" }

// const obj3 = { obj1, obj2 }
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = { ...obj1, ...obj2, ...obj3 }
console.log(obj4);

const users = [
    {
        id: 1234,
        email: "vishal@google.com"
    },
    {
        id: 9876,
        email: "om@google.com"
    },
    {
        id: 5678,
        email: "mayur@google.com"
    },
]

console.log(users[0].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
