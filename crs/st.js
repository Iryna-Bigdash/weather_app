// Link 
// https://codesandbox.io/s/elastic-leaf-85qwnv?file=/index.html

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


function displayWeatherCondition(response){
    console.log(response.data);
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


let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);


function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    let temperature = temperatureElement.innerHTML;
    temperature = Number(temperature);
    temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
searchCity("New York");






// // Home Work












//   let h2 = document.querySelector("#city-name");
//   h2.innerHTML = city;

  









// // // Current temperature
// let apiKey = "5da7b2dc058f07286fea39c4cee516a3";
// // // let city = "Riga"
// let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;



// // function showTemperature(response) {
// //     // alert(`The current temperature is ${response.data.name}`);
// //     console.log(response.data);

// //     let temperature = Math.round(response.data.main.temp);
// //     let temperatureElement = document.querySelector("#temperature");
// //     let description = document.querySelector("#temperature-description");
// //     // let minTemperature = document.querySelector("#min-temp");
// //     temperatureElement.innerHTML = `${temperature}`;
// //     description.innerHTML = response.data.weather[0].description;
// //     // minTemperature.innerHTML = response.data.weather[0].temp_min;
// //   }

// //   let h2 = document.querySelector("#city-name");
// //   h2.innerHTML = city;


// let url = "https://jsonplaceholder.typicode.com/users/1";
// //   axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

// // // Log current temperature depend the GEO LOCATION

// // function showPosition(position) {
// //     let h6 = document.querySelector("h6")
// //     h6.innerHTML =`Your Latitued is ${position.coords.latitude} and your longitude is ${position.coords.longitude}`;

// //   }
// //   function getCurrentPosition() {
// //     navigator.geolocation.getCurrentPosition(showPosition);
// // }
// //   let button = document.querySelector("#current-location-button");
// //   button.addEventListener("click", getCurrentPosition);