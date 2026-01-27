// let myName = "Om     "
// let myFrName = "vishal     "

// console.log(myName.trueLength);


let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.om = function () {
    console.log(`om is present in all objects`);
}

Array.prototype.heyOm = function () {
    console.log(`Om says hello`);
}

// heroPower.om()
// myHeros.om()
// myHeros.heyOm()
// heroPower.heyOm()

// inheritance

const user = {
    name: 'om',
    email: 'om14@google.com'
}

const Teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}

Teacher.__proto__ = user

Object.setPrototypeOf(teachingSupport, Teacher)

let anotherUserName = 'Om     '

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"Om".trueLength()
"iceTea".trueLength()