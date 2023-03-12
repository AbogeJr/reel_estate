import { FaBed, FaBath } from "react-icons/fa";

const PropertyCard = ({ property }) => {
  return (
    <div key={property.id} className="w-full py-2 px-4">
      <div className="bg-white rounded-lg overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-52 rounded-lg object-cover"
        />
        <div className="p-2">
          <h2 className="text-xl font-bold mb-2">{property.title}</h2>
          <p className="text-gray-800 mb-2">{property.location}</p>
          <p className="text-gray-500 mb-2">{property.description}</p>
          <div className="text-gray-600 my-2">
            <FaBed className="w-6 h-6 inline-block mr-2" />
            <span className="mr-5">{property.bedrooms}</span>
            <FaBath className="w-5 h-5 inline-block mr-2" />
            <span>{property.bathrooms}</span>
          </div>
          <p className="text-gray-600 text-sm">{property.price}</p>
        </div>
        <button className="border p-2 m-2 rounded-lg text-xs">
          View Property
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
