"use client";
import React, { useState } from "react";
import LocationCard from "../items/LocationCard";
import classes from "./LocationContainer.module.css";
import MultipleSelectDropdown from "./MultipleSelectDropdown";
import { data } from "../../app/data/LocationData";

function LocationContainer({ location = "New Delhi" }) {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [filteredData, setFilteredData] = useState(data[location] || []);
  const [found, setFound] = useState(data[location] ? true : false);

  const handleFilter = (event) => {
    const button = event.target;
    button.classList.remove(classes.bouncy);
    void button.offsetWidth;
    button.classList.add(classes.bouncy);
    if (selectedLocations.length === 0) {
      setFound(true);
      setFilteredData(data);
      return;
    }
    const newFilteredData = [];

    selectedLocations.map((item) => {
      const temp = data[location].filter((it) => it.name.includes(item));
      newFilteredData.push(...temp);
    });
    if (newFilteredData.length === 0) setFound(false);
    else setFound(true);
    setFilteredData(newFilteredData);
  };

  const handleResetInput = () => {
    setFilteredData(data[location] || []);
    setFound(true);
  };

  return (
    <div className={classes.locationContainer}>
      <div className={classes.heading2}>
        Premium Locations in
        <p className={classes.boldText}>{location}</p>
      </div>
      <MultipleSelectDropdown
        location={location}
        selectedLocations={selectedLocations}
        setSelectedLocations={setSelectedLocations}
        handleFilter={handleFilter}
        handleResetInput={handleResetInput}
      />
      <div className={classes.contentContainer}>
        <div className={classes.locationCards}>
          {found &&
            filteredData.map((item, index) => (
              <LocationCard
                key={index}
                id={item.id}
                name={item.name}
                businessPrice={item.businessPrice}
                gstPrice={item.gstPrice}
                mailingPrice={item.mailingPrice}
                url={item.url}
              />
            ))}
          {!found && (
            <p className={classes.warningText}>
              Sorry, no data available for this location
            </p>
          )}
        </div>
        <div className={classes.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3505.586132232717!2d77.20757847549677!3d28.52209707572522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMxJzE5LjYiTiA3N8KwMTInMzYuNiJF!5e0!3m2!1sen!2sin!4v1710090797146!5m2!1sen!2sin"
            className={classes.iFrameIcon}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default LocationContainer;
