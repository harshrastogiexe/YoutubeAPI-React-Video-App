import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
	const { title, channelTitle, thumbnails } = video.snippet;


	return (
		<section
			className="video"
			onClick={() => {
				onVideoSelect(video);
			}}
		>
			<div className="video__thumbnail">
				<img src={thumbnails.medium.url} alt="thumbnail" />
			</div>
			<div className="video__metaData">
				<h3>{title}</h3>
				<span>{channelTitle}</span>
			</div>
		</section>
	);
};

export default VideoItem;
