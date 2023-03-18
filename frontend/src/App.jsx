import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import Error from "./pages/Error";
import Listings from "./pages/Listings";
import Footer from "./components/Footer";
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import Call from "./pages/Call";
import propertyListings from "./assets/cities.json";

const App = () => {
  const [listings, setListings] = useState(propertyListings);

  const getAllListings = () => {
    axios
      .get("http://localhost:5000/properties")
      .then((response) => {
        setListings(response.data.properties);
      })
      .catch((error) => {});
  };

  const getListingsByLocation = (location) => {
    axios
      .get(`http://localhost:5000/properties/location/${location}`)
      .then((response) => {
        setListings(response.data.properties);
      })
      .catch((error) => {});
  };

  const getListingsByPriceRange = (minPrice, maxPrice) => {
    axios
      .get("http://localhost:5000/properties/price/${minPrice}/${maxPrice}")
      .then((response) => {
        setListings(response.data.properties);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getAllListings();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings listings={listings} />} />
        <Route path="/register" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/call" element={<Call />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
