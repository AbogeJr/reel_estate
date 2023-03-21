import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Peer from "peerjs";

function Call({ userId }) {
  const [peer1, setPeer1] = useState(null);
  const [peer2, setPeer2] = useState(null);
  const [muted, setMuted] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(true);

  useEffect(() => {
    const p1 = new Peer({ debug: 2 });
    // const p2 = new SimplePeer();

    setPeer1(p1);
    // setPeer2(p2);

    const socket = io("http://localhost:5500");

    //   peer1.on("signal", (data) => {
    //     // send the offer message to the signaling server
    //     socket.emit("offer", data);
    //   });

    //   peer2.on("signal", (data) => {
    //     // send the answer message to the signaling server
    //     socket.emit("answer", data);
    //   });

    //   socket.on("offer", (data) => {
    //     // receive the offer message from the signaling server
    //     peer2.signal(data);
    //   });

    //   socket.on("answer", (data) => {
    //     // receive the answer message from the signaling server
    //     peer1.signal(data);
    //   });

    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((stream) => {
        // add the stream to the first peer
        peer1.addStream(stream);

        // when the second peer receives the stream, add it to a video element
        // peer2.on("stream", (remoteStream) => {
        //   const videoElement = document.getElementById("remote-video");
        //   videoElement.srcObject = remoteStream;
        // });

        // when the first peer receives the stream, add it to a video element
        peer1.on("stream", (remoteStream) => {
          const videoElement = document.getElementById("local-video");
          videoElement.srcObject = remoteStream;
        });
      })
      .catch((err) => {
        console.error("Error accessing media devices", err);
      });
  }, []);

  // const handleToggleMute = () => {
  //   const audioTrack = peer1.streams[0].getAudioTracks()[0];
  //   audioTrack.enabled = !audioTrack.enabled;
  //   setMuted(!audioTrack.enabled);
  // };

  // const handleToggleVideo = () => {
  //   const videoTrack = peer1.streams[0].getVideoTracks()[0];
  //   videoTrack.enabled = !videoTrack.enabled;
  //   setVideoEnabled(videoTrack.enabled);
  // };
  // const handleHangUp = () => {
  //   // close both peer connections
  //   peer1.close();
  //   peer2.close();

  //   // stop all media tracks in the user's stream
  //   peer1.streams[0].getTracks().forEach((track) => {
  //     track.stop();
  //   });

  //   // remove the video elements from the DOM
  //   const localVideo = document.getElementById("local-video");
  //   const remoteVideo = document.getElementById("remote-video");
  //   localVideo.srcObject = null;
  //   remoteVideo.srcObject = null;

  //   // navigate back to the home page or show a message
  //   history.push("/");
  //   // or: setShowMessage('Call ended.');
  // };

  return (
    <div>
      <div>
        <video id="local-video" autoPlay muted></video>
      </div>
      <div>
        <video id="remote-video" autoPlay></video>
      </div>
      <div>
        {/* <button onClick={handleToggleMute}>{muted ? "Unmute" : "Mute"}</button>
        <button onClick={handleToggleVideo}>
          {videoEnabled ? "Stop Video" : "Start Video"}
        </button>
        <button onClick={handleHangUp}>Hang Up</button> */}
      </div>
    </div>
  );
}
export default Call;
