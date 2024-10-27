import React from "react";
import "./weatherTable.css";

const WeatherTable = ({ cityData, onDelete }) => {
  return (
    <table className="weather-table">
      {/* <thead>
        <tr>
          <th>City</th>
          <th>Description</th>
          <th>Temperature (°C)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
          <th>Actions</th>
        </tr>
      </thead> */}
      <tbody>
        {cityData.map((city) => (
          <tr key={city.id}>
            <td>{city.name}</td>
            <td>{city.weather[0].description}</td>
            <td>{city.main.temp}</td>
            <td>{city.main.pressure}</td>
            <td>{city.main.humidity}</td>
            <td>
              <button onClick={() => onDelete(city.name)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeatherTable;
