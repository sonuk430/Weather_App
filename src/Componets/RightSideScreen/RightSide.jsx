import { useState } from "react";
import { ApiKey } from "../../Utils/WeatherAPI";
import "./rightSide.css";
import WeatherTable from "../Table/WeatherTable";
import TableHeading from "../TableHeading/TableHeading";

const RightSide = ({ indianCities, activeIndex }) => {
  const [cityNames, setCityNames] = useState(""); // Input from the user
  const [cityData, setCityData] = useState([]); // Weather data for cities

  // Handle input change
  function handleInputChange(e) {
    setCityNames(e.target.value);
  }

  console.log(indianCities[activeIndex]);

  // Handle search button click to add multiple cities
  function handleClick() {
    if (cityNames) {
      const cities = cityNames.split(",").map((city) => city.trim());
      cities.forEach((city) => {
        if (city) getWeatherData(city);
      });
      setCityNames(""); // Clear input field
    }
  }

  // Fetch weather data for a specific city and add to cityData
  async function getWeatherData(cityName) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}&units=metric`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.cod === 200) {
        setCityData((prevCityData) => {
          const isCityPresent = prevCityData.some(
            (city) => city.name === data.name
          );
          if (!isCityPresent) {
            return [...prevCityData, data];
          } else {
            alert(`${data.name} is already added!`);
            return prevCityData;
          }
        });
      } else {
        alert(`City ${cityName} not found! Please enter a valid city name.`);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  // Delete a city from the cityData array
  function handleDelete(cityName) {
    setCityData((prevCityData) =>
      prevCityData.filter((city) => city.name !== cityName)
    );
  }

  return (
    <div className="rightSideWrapper">
      <div className="rightSideSearch">
        <input
          type="text"
          placeholder="Enter City Names"
          value={cityNames}
          onChange={handleInputChange}
        />
        <button onClick={handleClick}>🔍</button>
      </div>
      <TableHeading />
      {cityData.length > 0 ? (
        <>
          <WeatherTable cityData={cityData} onDelete={handleDelete} />
        </>
      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
};

export default RightSide;
