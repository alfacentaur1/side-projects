const apiKey = "db7d08d25bd53b948836768603d063eb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function fetchWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();
        
        if (data.cod === "404") {
            alert("City not found");
            return;
        }

        let weather = data.weather[0].main;
        let humidity = data.main.humidity;
        let wind_speed = data.wind.speed;
        let temp = data.main.temp;

        document.getElementsByClassName("humidity")[0].innerText = humidity + "%";
        document.getElementsByClassName("wind")[0].innerText = wind_speed + " km/h";
        document.getElementsByClassName("city")[0].innerText = city;
        document.getElementsByClassName("temp")[0].innerText = temp + "°C";
        
        document.querySelector('input[type="text"]').value = "";

        let image = document.getElementsByClassName("weather-icon")[0];
        if (weather === "Clouds") {
            image.src = "images/cloudy.png";
        } else if (weather === "Rain") {
            image.src = "images/rain.png";
        }
        else if (weather === "Sun") {
            image.src = "images/sun.png";
        }
         else if (weather === "Clear") {
            image.src = "images/sun.png";
        } else if (weather === "Snow") {
            image.src = "images/snow.png";
        }
        else if (weather === "Mist") {
            image.src = "images/mist.png";
        
        }
         else {
            image.src = "images/sun.png";
        }
    } catch (error) {
        alert("Failed to fetch weather. Please check your connection.");
        console.error(error);
    }
}

async function main() {
    fetchWeather("Praha");
}

async function checkWeather() {
    let input = document.querySelector('input[type="text"]').value.trim();
    if (input) fetchWeather(input);
}

document.getElementById("enter").addEventListener("click", checkWeather);

// Handle Enter key press
document.querySelector('input[type="text"]').addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather();
    }
});

main();