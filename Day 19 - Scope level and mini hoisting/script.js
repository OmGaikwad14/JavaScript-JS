function one() {
    const username = "Vishal"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "Vishal"
    if (username === "Vishal") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);

}
// console.log(username);



// +++++++++++++++++++++ Hoisting +++++++++++++++++++++

console.log(addone(5));

function addone(num) {
    return num + 1
}


console.log(addTwo(5));

const addTwo = function (num) {
    return num + 2
}
