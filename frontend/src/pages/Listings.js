import PropertyCard from "../components/PropertyCard";

const Listings = () => {
  const propertyListings = require("../assets/cities.json");

  return (
    <div className="flex flex-col bg-gray-100">
      <h1 className="text-3xl font-thin text-neutral-100 md:px-16 px-6 mt-20 mb-8 w-full p-5 bg-gray-800 ">
        Find Your Dream Home
      </h1>
      <div className="flex flex-wrap">
        <div className="self-start md:px-16 border flex flex-col md:w-1/4">
          <h1 className="text-2xl">Filter Section</h1>
        </div>
        <div className="flex flex-wrap md:w-1/2 self-center justify-center px-4">
          {propertyListings.map((property) => (
            <PropertyCard property={property} />
          ))}
        </div>
        <div className=" md:px-16 border flex flex-col md:w-1/4">
          <h1 className="text-2xl">Info Section</h1>
        </div>
      </div>
    </div>
  );
};

export default Listings;
