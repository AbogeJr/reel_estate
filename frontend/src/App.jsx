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

  useEffect(() => {
    axios
      .get("http://localhost:5000/properties")
      .then((response) => {
        // console.log(response.data.properties);
        setListings(response.data.properties);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings listings={listings} />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/call" element={<Call />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
