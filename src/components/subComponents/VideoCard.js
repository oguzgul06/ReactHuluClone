import React from "react";
import "./VideoCard.css";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src="https://geekstra.com/wp-content/uploads/2014/08/geekstra_batman-v-superman_03-600x4231.jpg"
        alt=""
      />
      <p>This is a film about coding...</p>
      <h2>Movie Title</h2>
      <p>Number of likes...</p>
    </div>
  );
}

export default VideoCard;
