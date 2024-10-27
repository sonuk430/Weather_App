import "./weather_App.css";
import { LeftSIde } from "../LeftSideScreen/LeftSIde";
import NavBar from "../NavBar/NavBar";
import RightSide from "../RightSideScreen/RightSide";
import { useState } from "react";

const indianCities = [
  "Mumbai",
  "Delhi",
  "Patna",
  "Kolkata",
  "Chennai",
  "Hyderabad",
  "Ahmedabad",
  "Pune",
  "Jaipur",
  "Surat",
];

const Weather_App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [initialCityName, setInitialCityName] = useState(indianCities[0]); // Set initial city name to the first city

  function handleCityNameActive() {
    // Log the current city name based on the activeIndex
    // console.log(indianCities[activeIndex]);

    // Update the activeIndex to the next city, wrapping around if necessary
    setActiveIndex((prev) => (prev + 1) % indianCities.length);
  }

  return (
    <>
      <div className="weatherApp">
        <NavBar />
        <div className="wrapper">
          <div className="leftSide">
            <LeftSIde
              activeIndex={activeIndex}
              handleCityNameActive={handleCityNameActive}
              initialCityName={initialCityName}
              setActiveIndex={setActiveIndex}
              indianCities={indianCities} // Pass the indianCities array as a prop
            />
          </div>
          <div className="rightSide">
            <RightSide indianCities={indianCities} activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather_App;
