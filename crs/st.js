
let now = new Date();
let curretDate = document.querySelector("#current-date")
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Suturday"];
let day = days[now.getDay()];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[now.getMonth()];
curretDate.innerHTML = `Today: ${day} ${month} ${date}, ${hours}:${minutes}`
let iconElement = document.querySelector("#icon");

function displayForecast() {
    let forecastElement = Document.querySelector("#forecast");
    forecastElement.innerHTML = "Hello"
}


function displayWeatherCondition(response){
    // console.log(response.data);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
    document.querySelector("#temperature-description").innerHTML = response.data.weather[0].description;
    document.querySelector("#min-temperature").innerHTML = Math.round(response.data.main.temp_min);
    document.querySelector("#max-temperature").innerHTML = Math.round(response.data.main.temp_max);
    document.querySelector("#current-city").innerHTML = response.data.name;
    iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);

    celsiusTemperature = response.data.main.temp;
}

function searchCity(city) {
    let apiKey =  "5f7a5a604347065f972608e84fcb6389";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);

}

function handleSubmit(event) {
       event.preventDefault();
       let city = document.querySelector("#city-input").value;
       searchCity(city);
}

function searchLocation(position){
    let apiKey =  "5f7a5a604347065f972608e84fcb6389";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);

}

function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
}


// function convertToFahrenheit(event) {
//     event.preventDefault();
//     let temperatureElement = document.querySelector("#temperature");
//     let temperature = temperatureElement.innerHTML;
//     temperature = Number(temperature);
//     temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
// }

// let fahrenheitLink = document.querySelector("#fahrenheit-link");
// fahrenheitLink.addEventListener("click", convertToFahrenheit);

function displayFahrenheitTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");  
     
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
   
    
    let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature); 
}
function displayCelsiusTemperature(event) {
    event.preventDefault();
   
    celsiusLink.classList.add("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemperature); 
}
function displayForecast() {
    let forecastElement = document.querySelector("#forecast");
    let forecastHTML = `<div class="dayly-temperature__box">`;

    let days = ["Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"];
    days.forEach(function(day) {
    forecastHTML = forecastHTML + `
        <li class="dayly-temperature__item">
    <h3 class="dayly-temperature__title">${day}</h3>
    <p class="dayly-temperature__line"></p>
    <img class="dayly-temperature__img" src="./image/🌤️.svg" alt="Partly Cloudy" width="120px" height="120px">
    <p class="dayly-temperature__min-max">
    ↓<span class="min-dayly-temperature">15°</span>
    ↑<span class="max-dayly-temperature">21°</span>
    </p>
    </li>
    `;
});
    forecastHTML = forecastHTML + `</div>`
    forecastElement.innerHTML = forecastHTML;
}




let celsiusTemperature = null;

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);


let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
searchCity("New York");
displayForecast();


















  









