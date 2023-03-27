import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import Error from "./pages/Error";
import Listings from "./pages/Listings";
import Footer from "./components/Footer";
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import Call from "./pages/Call";
import AddListingForm from "./components/AddListingForm";
// import propertyListings from "./assets/cities.json";

const App = () => {
  const [listings, setListings] = useState([]);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") !== null
  );
  const [userId, setUserId] = useState(null);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  const getAllListings = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/properties`)
      .then((response) => {
        console.log("fetched properties");
        setListings(response.data.properties);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllListings();
  }, []);

  return (
    <BrowserRouter>
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            loggedIn ? (
              <Home listings={listings} setListings={setListings} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/listings" element={<Listings listings={listings} />} />
        <Route path="/register" element={<SignUpForm />} />
        <Route
          path="/login"
          element={
            <LoginForm
              setLoggedIn={setLoggedIn}
              setUserId={setUserId}
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path="/add"
          element={
            loggedIn ? (
              <AddListingForm userId={userId} loggedIn={loggedIn} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/call"
          element={
            loggedIn ? <Call userId={userId} /> : <Navigate to="/login" />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
