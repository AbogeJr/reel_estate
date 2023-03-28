import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SetUpMeeting = () => {
  const [meetingId, setMeetingId] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleMeetingIdChange = (event) => {
    setMeetingId(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleStartMeeting = () => {
    if (meetingId && userName) {
      navigate("/call", {
        state: {
          meetingId,
          userName,
        },
      });
    }
  };
  return (
    <div className="p-4 h-4/5 pt-28">
      <h2 className="text-2xl font-bold mb-2">Set Up Meeting</h2>
      <form onSubmit={handleStartMeeting}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="meeting-id"
          >
            Meeting ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="meeting-id"
            type="text"
            placeholder="Enter Meeting ID"
            value={meetingId}
            onChange={handleMeetingIdChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="user-name"
          >
            Your Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="user-name"
            type="text"
            placeholder="Enter Your Name"
            value={userName}
            onChange={handleUserNameChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={!meetingId || !userName}
          >
            Start Meeting
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetUpMeeting;
