const d = new Date();
let hour = d.getHours();

let weather = {
    "apiKey": "b5dbaf5c9e1615bb3d04125fb03741d9",
    fetchWeather: function (city) {

        navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        });

        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "Mph";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

window.onload = (event) => {
    console.log('Page is fully loaded');

    //Setup functions
    setGreeting();
    setBackground(randomInt(0, 4));
    weather.fetchWeather("Greenville");
  };


function setGreeting() 
{
        if (hour >= 0 && hour < 12)
        {
            document.getElementById("greeting").innerHTML = "Good Morning!";
        }
        else if (hour >= 12 && hour < 18)
        {
            document.getElementById("greeting").innerHTML = "Good Afternoon!";
        }
        else if (hour >= 18 && hour < 24)
        {
            document.getElementById("greeting").innerHTML = "Good Evening!";
        }
        else
        {
            document.getElementById("greeting").innerHTML = "UR STUPID";
        }
}

function setBackground(index)
{
    console.log("Background");
    document.body.style.backgroundImage = "url(Images/Backgrounds/background" + index + ".jpg)";
}


function setWeather(city)
{

}


function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
