const cityName=document.getElementById("city-name");
const weatherType=document.getElementById("weather-type");
const temp=document.getElementById("temp");
const mintTemp=document.getElementById("min-temp");
const maxTemp=document.getElementById("max-temp");
const city=document.getElementById('city-input');
const btnEl=document.getElementById('btn');

btnEl.addEventListener('click',()=>{
getWeatherData(city.value);
});

async function getWeatherData(city){
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "52adf0e051msh3652c684851c83ep17bce9jsn9aaa763151c7",
    "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
  },
};

fetch(
  `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`,
  options
)
  .then((response) => response.json())
  .then((data) => {
    cityName.innerText = data.location.city;
    weatherType.innerText = data.current_observation.condition.text;
    temp.innerText = data.current_observation.condition.temperature;
    mintTemp.innerText = data.forecasts[1].low;
    maxTemp.innerText = data.forecasts[1].high;
  }   
  )
  .catch((err) => console.error(err))
}