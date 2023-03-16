import { useState, useRef, useEffect } from "react";
import Peer from "peerjs";

function Call() {
  const [peerId, setPeerId] = useState("");
  const [remotePeerIdValue, setRemotePeerIdValue] = useState("");
  const remoteVideoRef = useRef(null);
  const currentUserVideoRef = useRef(null);
  const peerInstance = useRef(null);

  useEffect(() => {
    const peer = new Peer();

    peer.on("open", (id) => {
      setPeerId(id);
    });

    peer.on("call", (call) => {
      var getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

      getUserMedia({ video: true, audio: true }, (mediaStream) => {
        currentUserVideoRef.current.srcObject = mediaStream;
        currentUserVideoRef.current.play();
        call.answer(mediaStream);
        call.on("stream", function (remoteStream) {
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.play();
        });
      });
    });

    peerInstance.current = peer;
  }, []);

  const call = (remotePeerId) => {
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    getUserMedia({ video: true, audio: true }, (mediaStream) => {
      currentUserVideoRef.current.srcObject = mediaStream;
      currentUserVideoRef.current.play();

      const call = peerInstance.current.call(remotePeerId, mediaStream);

      call.on("stream", (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream;
        remoteVideoRef.current.play();
      });
    });
  };
  console.log(peerId);

  return (
    <div className="w-full h-full pt-24">
      <h1 className=" p-3 text-xl w-1/2 border rounded-lg text-center mx-auto ">
        Current user id is: <span className="text-gray-500">{peerId}</span>
      </h1>
      <input
        type="text"
        className="border p-3 mx-auto w-1/2 block my-2 rounded-lg"
        placeholder="Enter User ID here"
        value={remotePeerIdValue}
        onChange={(e) => setRemotePeerIdValue(e.target.value)}
      />
      <button
        onClick={() => call(remotePeerIdValue)}
        className="bg-gray-800 text-white block mx-auto mb-5 rounded-lg p-3"
      >
        Start Call
      </button>
      <div className="w-4/5 mx-auto my-4 relative h-screen border flex">
        <div className="border w-1/5 h-1/5">
          <video ref={currentUserVideoRef} />
        </div>
        <div>
          <video ref={remoteVideoRef} />
        </div>
      </div>
    </div>
  );
}

export default Call;
