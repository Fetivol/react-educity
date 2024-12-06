import React, { useEffect, useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/college2.mp4";

const VideoPlayer = ({ playerState, setPlayerState }) => {
  const player = useRef(null);
  const videoRef = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayerState(false);
    }
  };

  useEffect(() => {
    if (!playerState && player.current) {
      videoRef.current.currentTime = 0;
    }
  }, [playerState]);

  return (
    <div
      className={`video-player ${playerState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls ref={videoRef}></video>
    </div>
  );
};

export default VideoPlayer;
