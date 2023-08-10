// VideoPlayer.js
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./styles/videoplayer.css";

function VideoPlayer({ title, isOpen, onClose }) {
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    if (isOpen) {
      movieTrailer(title || "")
        .then((url) => {
          // Extract the video ID from the YouTube URL
          const videoId = new URL(url).searchParams.get("v");
          setTrailerUrl(videoId);
        })
        .catch((error) => {
          console.error("Error fetching trailer:", error);
          setTrailerUrl("");
        });
    }
  }, [isOpen, title]);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      {isOpen && trailerUrl && (
        <div className="video-player">
          <div className="video-player__close" onClick={onClose}>
            Close
          </div>
          <YouTube className="video-player" videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </>
  );
}

export default VideoPlayer;
