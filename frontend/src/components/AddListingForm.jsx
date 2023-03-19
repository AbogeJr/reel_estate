import { useState, useEffect } from "react";
import axios from "axios";

const AddListingForm = ({ userId, loggedIn }) => {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    // get the user's current location using the Geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const handleFileChange = (event) => {
    if (event.target.files) {
      setImages([...images, ...event.target.files]);
    }
    // setImages(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("location", location);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("bedrooms", bedrooms);
    formData.append("bathrooms", bathrooms);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("user_id", userId);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    try {
      const res = await axios.post(
        "http://localhost:5000/properties",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:w-1/2 pt-24 w-4/5 mx-auto">
      <h1 className="text-2xl mx-6 md:mx-16 p-4 mb-4 border-b">
        Create a New Property Listing
      </h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="images"
          >
            Images
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="images"
            type="file"
            multiple
            onChange={handleFileChange}
            accept="image/*"
            required
          />
          <input />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="bedrooms"
          >
            Bedrooms
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bedrooms"
            type="number"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="bathrooms"
          >
            Bathrooms
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bathrooms"
            type="number"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="longitude"
          >
            Longitude
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="longitude"
            type="number"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="bathrooms"
          >
            Latitude
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lattitude"
            type="number"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
            readOnly
          />
        </div>
        <div className="mb-4">
          <button
            className="bg-gray-800 rounded-lg text-white"
            type="submit"
          ></button>
        </div>
      </form>
    </div>
  );
};

export default AddListingForm;
