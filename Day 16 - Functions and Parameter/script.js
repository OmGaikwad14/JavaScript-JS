function sayMyName() {
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
}

// sayMyName()

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {

    // let result1 = number1 + number2
    // return result1
    return number1 + number2
}

const result1 = addTwoNumber(3, 4);
// const result2 = addTwoNumber(3, "4");
// const result3 = addTwoNumber(3, "a");

// console.log("Result1:", result1);


function loginUserMessage(username = "Mayur") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vishal"));
console.log(loginUserMessage());