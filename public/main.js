const weather = document.querySelector(".weather-info");
const searchWeather = document.querySelector("#weather-search");
const cityInput = document.querySelector("#city-input");

const fetchWeather = async (location) => {
  try {
    const response = await fetch(`/api?q=${location}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    const {
      location: { name },
      current: { temp_c },
    } = result;
    addWeatherDom({ name, temp_c });
  } catch (err) {
    console.log(err);
  }
};
const addWeatherDom = (weatherData) => {
  weather.innerHTML = `
            <h3 id="temperature">${weatherData.name}: ${weatherData.temp_c}°C</h3>
        `;
};
searchWeather.addEventListener("submit", (e) => {
  e.preventDefault();
  const queryCity = cityInput.value;
  fetchWeather(queryCity);
});
