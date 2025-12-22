function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Vishal",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: "Mayur",
    price: 399
})

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray) {
    return getArray[0]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400]));
