import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";

const Listings = ({ listings }) => {
  return (
    <div className="flex flex-col bg-gray-100">
      <h1 className="text-3xl font-thin text-neutral-100 md:px-16 px-6 mt-20 mb-5 w-full p-5 bg-gray-800 ">
        Find Your Dream Home
      </h1>
      <div className="flex flex-wrap">
        <div className="self-start md:px-16 border flex flex-col md:w-1/4">
          <h1 className="text-2xl">Filter Section</h1>
        </div>
        <div className="flex flex-wrap md:w-1/2 self-start justify-center px-2 ">
          {listings ? (
            listings.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))
          ) : (
            <h1>No Listings Available</h1>
          )}
        </div>
        <div className="self-start md:px-16 border flex flex-col md:w-1/4">
          <h1 className="text-2xl">Info Section</h1>
        </div>
      </div>
    </div>
  );
};

export default Listings;
