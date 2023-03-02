const weather = document.querySelector(".weather-info");
const searchWeather = document.querySelector("#weather-search");
const cityInput = document.querySelector("#city-input");

const fetchWeather = async (location) => {
  try {
    fetch(`/api?q=${location}`)
      .then((response) => response.json())
      .then((data) => {
        const {
          location: { name },
          current: { temp_c },
        } = data;

        console.log({ name, temp_c });
        addWeatherDom({ name, temp_c });
      });
  } catch (err) {
    console.log(err);
  }
};
const addWeatherDom = (weatherData) => {
  weather.innerHTML = `
            <h3 class="temperature">${weatherData.name} : ${weatherData.temp_c}</h3>
        `;
};
searchWeather.addEventListener("submit", (e) => {
  e.preventDefault();
  const queryCity = cityInput.value;
  fetchWeather(queryCity);
});
