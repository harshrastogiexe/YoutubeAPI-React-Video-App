import axios from "axios";
export default axios.create({
	// const KEY = "Your Key Goes Here ";
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		key: KEY, // ADD Your API Here 
		type: "video",
		maxResults: 4,
		part: "snippet",
	},
});

