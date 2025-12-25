const user = {
    username: "Vishal",
    price: 999,

    welcomemessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomemessage()
// user.username = "Sam"
// user.welcomemessage()

// console.log(this);

// function chai() {
//     let username = "Vishal";
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Vishal";
//     console.log(this.username);
// }

const chai = () => {
    let username = "Vishal";
    console.log(this);
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({ username: "Vishal" })


console.log(addTwo(3, 5));


const myArray = [5, 4, 3, 2, 1, 0];

myArray.forEach()
// myArray.forEach(function () { })
// myArray.forEach(() => { })