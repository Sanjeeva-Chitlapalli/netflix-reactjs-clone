// PlayerPage.js
import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import { useParams } from "react-router-dom";

function PlayerPage() {
  const { title } = useParams();
  return (
    <div>
      <VideoPlayer title={title} isOpen={true} onClose={() => window.close()} />
    </div>
  );
}

export default PlayerPage;
