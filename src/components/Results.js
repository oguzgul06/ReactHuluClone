import React from "react";
import "./Results.css";
import VideoCard from "./subComponents/VideoCard";

function Results({movie}) {
  return (
    <div className="results">
      <VideoCard movie={movie} />
      <VideoCard movie={movie} />
      <VideoCard movie={movie} />
      <VideoCard movie={movie} />
      <VideoCard movie={movie} />
      <VideoCard movie={movie} />
      <VideoCard movie={movie} />
      <VideoCard movie={movie} />
      <VideoCard movie={movie} />
    </div>
  );
}

export default Results;
