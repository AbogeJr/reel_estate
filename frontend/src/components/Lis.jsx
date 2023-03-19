import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import PropertyCard from "./PropertyCard";

function RealEstateListings(props) {
  const [listings, setListings] = useState([]);
  const [filteredlistings, setFilteredlistings] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");

  useEffect(() => {
    // Fetch the real estate listings from the API when the component mounts
    fetchListings();
  }, []);

  useEffect(() => {
    // Filter the listings when the filter values change
    filterListings();
  }, [minPrice, maxPrice, location, bedrooms, bathrooms]);

  const fetchListings = async () => {
    try {
      const response = await axios.get("/api/listings");
      setListings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterListings = () => {
    let filteredListings = listings.filter((listing) => {
      let isMatch = true;

      if (minPrice && listing.price < minPrice) {
        isMatch = false;
      }

      if (maxPrice && listing.price > maxPrice) {
        isMatch = false;
      }

      if (location && !listing.location.includes(location)) {
        isMatch = false;
      }

      if (bedrooms && listing.bedrooms !== parseInt(bedrooms)) {
        isMatch = false;
      }

      if (bathrooms && listing.bathrooms !== parseInt(bathrooms)) {
        isMatch = false;
      }

      return isMatch;
    });

    setFilteredlistings(filteredListings);
  };

  const handleFilterSubmit = (filterValues) => {
    setMinPrice(filterValues.minPrice);
    setMaxPrice(filterValues.maxPrice);
    setLocation(filterValues.location);
    setBedrooms(filterValues.bedrooms);
    setBathrooms(filterValues.bathrooms);
  };

  return (
    <div>
      <Filter onFilterSubmit={handleFilterSubmit} />
      <h2>Real Estate Listings</h2>
      <ul>
        {filteredlistings.map((listing) => (
          <PropertyCard key={listing._id} />
        ))}
      </ul>
    </div>
  );
}

export default RealEstateListings;
