const Listings = () => {
  const propertyListings = [
    {
      id: 1,
      title: "Beautiful Apartment in Downtown",
      image: "https://source.unsplash.com/300x200/?apartment",
      price: "Ksh. 1,500,000",
      location: "Kiamunyi, Nakuru",
    },
    {
      id: 2,
      title: "Spacious House with Garden",
      image: "https://source.unsplash.com/300x200/?house",
      price: "Ksh 5,000,000",
      location: "Ruiru, Nairobi",
    },
    {
      id: 3,
      title: "Luxury Condo with Ocean View",
      image: "https://source.unsplash.com/300x200/?condo",
      price: "Ksh. 3,000,000",
      location: "Mtwapa, Mombasa",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col flex-1  bg-gray-100">
        <h1 className="text-3xl font-thin text-neutral-100 md:px-16 font-bold mt-20 mb-8 w-full p-5 bg-gray-800 text-gray-800">
          Find Your Dream Home
        </h1>

        <div className="flex flex-wrap md:w-1/2 mx-auto justify-center px-4">
          {propertyListings.map((property) => (
            <div key={property.id} className="w-full p-4">
              <div className="bg-white rounded-lg shadow-xs overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{property.title}</h2>
                  <p className="text-gray-800 mb-2">{property.location}</p>
                  <p className="text-gray-600 text-sm">{property.price}</p>
                </div>
                <button className="border p-2 m-2 rounded-lg">See More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;
