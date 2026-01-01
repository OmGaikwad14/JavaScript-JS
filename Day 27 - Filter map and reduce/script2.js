const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
//     return accumulator + currentValue
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "JS course",
        price: 2999
    },
    {
        itemName: "PY course",
        price: 999
    },
    {
        itemName: "AI course",
        price: 5999
    },
    {
        itemName: "Data Science course",
        price: 15999
    },
]

const COD = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(COD);