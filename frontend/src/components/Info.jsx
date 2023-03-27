import React from "react";

const InfoSection = ({ property }) => {
  const { images } = property;
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
      <p className="text-gray-700 mb-2">{property.description}</p>
      <ul className="text-sm text-gray-600 mb-2">
        <li>Location: {property.location} </li>
        <li>{property.bedrooms} Bedrooms</li>
        <li>{property.bathrooms} Bathrooms</li>
      </ul>

      {images.length > 0 ? (
        images.map((image) => (
          <img
            src={`http://localhost:5000/images/${image}`}
            alt={property.title}
            className="w-full h-52 rounded-lg object-cover"
          />
        ))
      ) : (
        <h3>No Images Found</h3>
      )}
      <p className="font-bold text-lg mb-2">Ksh. {property.price}</p>
      <button className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-xl">
        Contact Agent
      </button>
    </div>
  );
};

export default InfoSection;
