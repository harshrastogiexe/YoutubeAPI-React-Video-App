import React from "react";
import SearchBar from "./SearchBar";
import Video from "./Video";
import VideoList from "./VideoList";
import youtube from "../api/youtube";

class App extends React.Component {
	state = {
		term: "",
		videos: [],
		currentVideo: null,
	};

	submitSearch = async (term) => {
		const response = await youtube.get("/search", {
			params: {
				q: term,
			},
		});

		this.setState({
			term,
			videos: response.data.items,
		});
	};

	onVideoSelect = (video) => {
		this.setState({ currentVideo: video });
	};

	render() {
		return (
			<>
				<SearchBar searchSubmit={this.submitSearch} />

				<section className="wrapper split-sm ">
					{/* Video Player */}
					<Video video={this.state.currentVideo} />
					{/* Video List */}
					<VideoList
						onVideoSelect={this.onVideoSelect}
						term={this.state.term}
						videos={this.state.videos}
					/>
				</section>
			</>
		);
	}
}

export default App;
