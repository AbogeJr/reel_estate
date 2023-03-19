import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function LoginForm({ setLoggedIn, loggedIn, setUserId }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      // console.log(response.data.token);
      setUserId(response.data.user_id);
      console.log("User ID:", response.data.user_id);
      setLoggedIn(true);
      // console.log(loggedIn);

      setErrorMsg(null);
    } catch (error) {
      // setErrorMsg(error.response.data.msg);
      console.error(error);
    }
  };

  const ErrorBox = ({ msg }) => {
    return (
      <div className="p-4 z-20 text-red-500 w-full text-center text-xl font-thin">
        {msg}
      </div>
    );
  };
  if (loggedIn) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="w-full pt-24 md:pt-36 pb-24">
        <h1 className="text-2xl mx-6 md:mx-16 p-4 mb-4 border-b">Log In</h1>
        {errorMsg && <ErrorBox msg={errorMsg} />}
        <form onSubmit={handleSubmit} className="w-4/5 max-w-md mx-auto">
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
          <div className="mb-6">
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
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
