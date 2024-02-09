const apikey = "2152ad639ba5490b607a25591054e4dd";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").Style.display = "block";
        document.querySelector(".weather").Style.display = "none";
    }
    else{
       var data = await response.json();
       document.querySelector(".city").innerHTML = data.name;
       document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
       document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
       document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "cloudy.png"
    } 
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png"
    } 
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "cold.png";
    } 
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "sunny.png";
    } 
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "mist.png"
    }
     

    }
   
}
searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})
