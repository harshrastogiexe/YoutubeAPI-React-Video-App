import React from "react";
import VideoItem from "./VideoItem";
// import Loader from "./Loader";

const VideoList = ({ term, videos, onVideoSelect }) => {
	const renderedList = videos.map((video, i) => (
		<VideoItem key={i} onVideoSelect={onVideoSelect} video={video} />
	));
	return <div className="videolist">{renderedList}</div>;
};

export default VideoList;
