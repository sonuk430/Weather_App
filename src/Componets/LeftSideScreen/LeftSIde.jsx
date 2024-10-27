import { useState } from "react";
import "./leftSide.css";

export const LeftSIde = ({
  initialCityName,
  activeIndex,
  handleCityNameActive,
  setActiveIndex,
  indianCities, // Accept indianCities as a prop
}) => {
  return (
    <>
      <div className="leftSideWrapper">
        <button className="getWeatherBtn" onClick={handleCityNameActive}>
          Get Weather
        </button>

        <h2>City</h2>

        {indianCities.map((el, index) => (
          <button
            key={index}
            className={`cityButton ${activeIndex === index ? "active" : ""}`} // Add 'active' class if this is the selected button
            onClick={() => setActiveIndex(index)} // Set the activeIndex directly on button click
          >
            {el}
          </button>
        ))}
      </div>
    </>
  );
};
