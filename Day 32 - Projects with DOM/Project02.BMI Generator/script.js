const form = document.querySelector('form');
const guide = document.getElementById('#guide');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else if (BMI < 18.6) {
        // show the result
        results.innerHTML = `Under Weight: <span>${BMI}</span>`;
    } else if (BMI >= 18.6 && BMI <= 24.9) {
        // show the result
        results.innerHTML = `Normal Range: <span>${BMI}</span>`;
    } else if (BMI > 24.9) {
        // show the result
        results.innerHTML = `Overweight: <span>${BMI}</span>`;
    } else {

    }
});