import React from "react";

class SearchBar extends React.Component {
	state = {
		term: "",
	};

	onInputChange = async (event) => {
		this.setState({ term: event.target.value });
	};

	onInputSubmit = (event) => {
		event.preventDefault();
		this.props.searchSubmit(this.state.term);
	};

	render() {
		return (
			<section className="searchbar container">
				<form onSubmit={this.onInputSubmit}>
					<label htmlFor="search-video">Search</label>
					<input
						onChange={this.onInputChange}
						type="text"
						placeholder="Search"
						value={this.state.term}
					/>
				</form>
			</section>
		);
	}
}

export default SearchBar;
