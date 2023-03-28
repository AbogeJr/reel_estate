import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";

export default function Call() {
  const location = useLocation();
  const { meetingId, userName } = location.state;
  useEffect(() => {
    const config = {
      name: `${userName || "user"}`,
      meetingId: `${meetingId} || reel-estate`,
      apiKey: process.env.REACT_APP_VIDEOSDK_API_KEY,
      containerId: "video-call",
      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,
      chatEnabled: true,
      screenShareEnabled: true,
    };

    const meeting = new VideoSDKMeeting();
    meeting.init(config);
  }, [userName, meetingId]);

  return (
    <div
      id="video-call"
      className="w-full px-6 bg-gray-800 h-screen pt-24"
    ></div>
  );
}
