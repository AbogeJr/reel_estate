// import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import Filter from "../components/Filter";
import InfoSection from "../components/Info";

const Listings = ({ listings, getAllListings }) => {
  const [filteredlistings, setFilteredlistings] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);

  const onSelect = (property) => {
    setSelectedProperty(property);
  };
  // useEffect(() => {
  //   // Fetch the real estate listings from the API when the component mounts
  //   fetchListings();
  // }, []);

  useEffect(() => {
    // Filter the listings when the filter values change
    filterListings();
  }, [minPrice, maxPrice, location, bedrooms, bathrooms]);

  // const fetchListings = async () => {
  //   try {
  //     const response = await axios.get("/api/listings");
  //     setListings(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
    <>
      <h1 className="text-3xl font-thin text-neutral-100 md:px-16 px-6 mt-20  w-full p-5 bg-gray-800 ">
        Find Your Dream Home
      </h1>
      <div className="flex pt-8 bg-gray-100">
        <div className="flex flex-wrap">
          <div className=" p-4 md:w-1/4">
            <Filter onFilterSubmit={handleFilterSubmit} />
          </div>
          <div className="flex flex-wrap md:w-1/2 h-screen overflow-scroll self-start justify-center mb-10 ">
            {filteredlistings ? (
              filteredlistings.map((property) => (
                <PropertyCard
                  key={property._id}
                  onSelect={onSelect}
                  property={property}
                />
              ))
            ) : (
              <h1>No Listings Available</h1>
            )}
          </div>
          <div className="self-start p-4 flex flex-col md:w-1/4">
            {selectedProperty && (
              <InfoSection
                key={selectedProperty._id}
                property={selectedProperty}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Listings;
