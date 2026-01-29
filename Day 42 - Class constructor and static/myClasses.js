// ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}chai`
//     }
//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }


// }

// const chai = new User('chai', 'chai@gmail.com', '1234')

// console.log(chai.changeUsername());
// console.log(chai.encryptPassword());


// behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}tea`
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}


const tea = new User('tea', 'tea@gmail.com', '1712')

console.log(tea.changeUsername());
console.log(tea.encryptPassword());
