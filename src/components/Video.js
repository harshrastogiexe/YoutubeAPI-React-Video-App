import React from "react";

const Video = ({ video }) => {
	if (video === null) {
		return <h1 className="player">Search The Video From Above And Play it</h1>;
	}
	const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;
	return (
		<section className="player">
			<div className="player__video">
				<iframe
					title="video"
					src={videoURL}
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<div className="player__data container">
				<h4>{video.snippet.title}</h4>
				<span>{video.snippet.channelTitle}</span>
				<p>{video.snippet.description}</p>
			</div>
		</section>
	);
};

export default Video;
