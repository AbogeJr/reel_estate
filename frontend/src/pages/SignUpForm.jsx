import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ready, setReady] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const registerUser = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        userData
      );
      console.log(response.data); // log the response data
      setErrorMsg(null);
      setReady(true);
      return response.data; // return the response data
    } catch (error) {
      console.error(error.response.data); // log the error response data
      setErrorMsg(error.response.data.msg);
      setReady(false);
      throw new Error(error); // throw an error with the error message
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send form data to server for registration
    let userData = {
      username,
      email,
      first_name: firstName,
      last_name: lastName,
      password,
    };
    registerUser(userData);
  };

  const ErrorBox = ({ msg }) => {
    return (
      <div className="p-4 z-20 text-red-500 w-full text-center text-xl font-thin">
        {msg}
      </div>
    );
  };

  return (
    <div className="w-full pt-24 md:pt-36 pb-24 relative">
      <h1 className="text-2xl mx-6 md:mx-16 p-4 mb-4 border-b">Sign Up</h1>
      {errorMsg && <ErrorBox msg={errorMsg} />}
      <form onSubmit={handleSubmit} className="max-w-md w-4/5 mx-auto">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 font-bold mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="lastName"
            className="block text-gray-700 font-bold mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
