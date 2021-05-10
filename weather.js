let input = document.querySelector('#city');
let button = document.querySelector('#submit').addEventListener('click',userInput);


function userInput(){
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=${APIKEY}`)
.then(response => response.json())
.then(data => {
    console.log(input.value);
    console.log(data);
    // console.log(data.list.main.temp);

    let kelvin = data.list[0].main.temp;
    let degC = Math.floor(kelvin - 273.15);

    console.log(degC);

    //F = C * 1.8 + 32;
    let degF = Math.floor(degC * 1.8 +32);
    console.log(degF);

    let div = document.querySelector('#result');

    div.textContent = `Current Temp: ${degF.toString()}`
})
}


