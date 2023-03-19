import React, { useState } from "react";

function Filter(props) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleBathroomChange = (event) => {
    setBathrooms(event.target.value);
  };

  const handleBedroomChange = (event) => {
    setBedrooms(event.target.value);
  };

  const handleFilterSubmit = () => {
    props.onFilterSubmit({
      minPrice: minPrice,
      maxPrice: maxPrice,
      location: location,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
    });
  };

  return (
    <div>
      <h2 className="text-xl">Filters</h2>
      <label className="text-sm">
        Minimum Price:
        <input
          type="number"
          value={minPrice}
          className="w-full"
          onChange={handleMinPriceChange}
        />
      </label>
      <br />
      <label className="text-sm">
        Maximum Price:
        <input
          type="number"
          value={maxPrice}
          className="w-full"
          onChange={handleMaxPriceChange}
        />
      </label>
      <br />
      <label className="text-sm">
        Location:
        <input
          type="text"
          className="w-full"
          value={location}
          onChange={handleLocationChange}
        />
      </label>
      <br />
      <label className="text-sm">
        Bedrooms:
        <input
          type="number"
          value={bedrooms}
          className="w-full"
          onChange={handleBedroomChange}
        />
      </label>

      <label className="text-sm">
        Bathrooms:
        <input
          type="number"
          className="w-full"
          value={bathrooms}
          onChange={handleBathroomChange}
        />
      </label>
      <br />
      <button
        className="bg-gray-800 text-white font-thin text-xs my-4 rounded-lg p-2"
        onClick={handleFilterSubmit}
      >
        Apply Filters
      </button>
    </div>
  );
}

export default Filter;
