let form = document.querySelector("form");
let input = document.querySelector("input");
let date = document.querySelector(".date");
let img = document.querySelector(".icon");
let Status = document.querySelector(".weatherstatus");
let city = document.querySelector(".city");
let degree = document.querySelector(".degree");
let fillLike = document.querySelector(".fills-like")
let humidity = document.querySelector(".humidity")
let cloud = document.querySelector(".cloud")
let pressure = document.querySelector(".wind-status");
let windDirection = document.querySelector(".direction")





console.log(form);

async function  getWeather(e) {
    console.log(input.value);
    e.preventDefault()
    try {
    const response =  await fetch(`https://api.weatherapi.com/v1/current.json?key=e955d0bcdb7b432e95c160244231306&q=${input.value}&aqi=yes`);
    const data = await response.json();
    const dateTime = data.location.localtime;
    const icon = data.current.condition.icon;
    const text = data.current.condition.text;
    const cityname =data.location.name;
    const temp = data.current.temp_c + " °C";
    const fillsLike = data.current.feelslike_c + " °C";
    const humidityIs = data.current.humidity + " %";
    const cloudC = data.current.cloud + " %";
    const wind = data.current.wind_kph + " km/h" ;
    const direction = data.current.wind_dir;
  






    date.innerText = dateTime;
    img.setAttribute('src', icon)
    Status.innerText = text;
    city.innerText = cityname;
    degree.innerText = temp;
    fillLike.innerText = fillsLike;
    humidity.innerText = humidityIs;
    cloud.innerText = cloudC;
    pressure.innerText = wind;
    windDirection.innerText = direction;
   

   

    } catch (error) {
        window.alert("Enter valid city Name") 
    }
    form.reset();
}
form.addEventListener("submit",getWeather)



