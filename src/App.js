import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/current-weather/CurrentWeather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState, useEffect } from 'react';
import ForeCast from './components/forecast/ForeCast';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForeCast] = useState(null);

    const handleSearch = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const fetchWeather = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);


    Promise.all([fetchWeather, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForeCast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.error(error));
  };

  // ✅ NEW: Auto-fetch weather using geolocation
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;

      const fetchWeather = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`);
      const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`);

      Promise.all([fetchWeather, forecastFetch])
        .then(async (response) => {
          const weatherResponse = await response[0].json();
          const forecastResponse = await response[1].json();

          setCurrentWeather({ city: weatherResponse.name, ...weatherResponse });
          setForeCast({ city: weatherResponse.name, ...forecastResponse });
        })
        .catch((error) => console.error("Geolocation fetch error:", error));
    });
  }, []);

  return (
    <div className="App">
      <Search onSearchChange={handleSearch} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <ForeCast data={forecast} />}
    </div>
  );
}

export default App;