const input = document.querySelector('#city');
const button = document.getElementById('submit').addEventListener('click', userInput);



async function userInput(){
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=${APIKEY}`;
const weatherData = await fetch (weatherURL);
const weatherJson = await weatherData.json();
console.log(weatherJson)

const kelvin = weatherJson.list[0].main.temp;
const degC = Math.floor(kelvin - 273.15);

//F = C * 1.8 + 32;
const degF = Math.floor(degC * 1.8 +32);
console.log(degF);

const div = document.querySelector('#result');
div.innerHTML = `<h2><img src="https://openweathermap.org/img/wn/${weatherJson.list[0].weather[0].icon}@2x.png" /> ${degF.toString()}°F <img src="https://openweathermap.org/img/wn/${weatherJson.list[0].weather[0].icon}@2x.png" /></h2>
<small>${weatherJson.list[0].weather[0].main}</small>`;
input.value = "";
}


