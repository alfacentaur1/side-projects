const apiKey = "db7d08d25bd53b948836768603d063eb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function main(){
    let input = "Praha";
    const response = await fetch(apiUrl + input+ `&appid=${apiKey}`);
    var data = await response.json();
    if(data.cod === "404"){
        alert("not found");
    }
    else {
        let weather = data.weather[0].main;
        let humidity = data.main.humidity;
        let wind_speed = data.wind.speed;
        let temp = (data.main.temp);
        document.getElementsByClassName("humidity")[0].innerText = humidity;
        document.getElementsByClassName("wind")[0].innerText = wind_speed + "km/h";
        document.getElementsByClassName("city")[0].innerText = input;
        document.querySelector('input[type="text"]').innerText = "";
        let image = document.getElementsByClassName("weather-icon")[0];
        if (weather === "Clouds"){
            image.src = "images/cloudy.png";
        }else if(weather === "Rain"){
            image.src = "images/rain.png"
        }else if(weather === "Sun" || weather === "Clear"){
            image.src = "images/sun.png"
        }else if(weather === "Snow"){
            image.src = "images/snow.png"
        }

    }
}

async function checkWeather(){
    let input = document.querySelector('input[type="text"]').value.trim();
    const response = await fetch(apiUrl + input+ `&appid=${apiKey}`);
    var data = await response.json();
    if(data.cod === "404"){
        alert("not found");
    }
    else {
        let weather = data.weather[0].main;
        let humidity = data.main.humidity;
        let wind_speed = data.wind.speed;
        let temp = (data.main.temp);
        document.getElementsByClassName("humidity")[0].innerText = humidity;
        document.getElementsByClassName("wind")[0].innerText = wind_speed + "km/h";
        document.getElementsByClassName("city")[0].innerText = input;
        document.querySelector('input[type="text"]').innerText = "";
        let image = document.getElementsByClassName("weather-icon")[0];
        if (weather === "Clouds"){
            image.src = "images/cloudy.png";
        }else if(weather === "Rain"){
            image.src = "images/rain.png"
        }else if(weather === "Sun" || weather === "Clear"){
            image.src = "images/sun.png"
        }else if(weather === "Snow"){
            image.src = "images/snow.png"
        }

    }
}
main();
document.getElementById("enter").addEventListener("click",()=> {
    checkWeather();
})
document.addEventListener("enter",()=> {
    checkWeather();
})

let style = document.querySelector('input[type="text"]');
style.addEventListener("blur",()=>{
    style.classList.add("blury");
})