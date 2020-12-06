import React, { Component } from 'react';
import '../../components/Home_Page/Youtube.css';
// import '../styles/Youtube.css';

const API = 'AIzaSyCiJ5pwG7nZOkojkMxYfVlI14L5SWr7H3o';
const ChannelID = 'PLnSNI07BPklnVXsaFyAloyKzDHq4FaEhn';
const result = 3;

var finalURL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=${result}&playlistId=${ChannelID}&key=${API}`;

class Youtube extends Component {
	constructor(props) {
		super(props);
		this.state = {
			resultyt: [],
		};
		this.clicked = this.clicked.bind(this);
	}

	clicked() {
		fetch(finalURL)
			.then((response) => response.json())
			.then((responseJson) => {
				// conconsole.log(responseJson);
				const resultyt = responseJson.items.map(
					(obj) => 'https://www.youtube.com/embed/' + obj.contentDetails.videoId
				);
				this.setState({ resultyt });
				// console.log(this.state.resultyt);
			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		// console.log(finalURL);
		// 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=3&playlistId=PLnSNI07BPklnVXsaFyAloyKzDHq4FaEhn&key=AIzaSyCiJ5pwG7nZOkojkMxYfVlI14L5SWr7H3o'

		// console.log(this.state.resultyt);
		return (
			<div>
				<div className="btn-1">
					<button className="btn btn-info" onClick={this.clicked}>
						Have a look
					</button>
				</div>
				{this.state.resultyt.map((link, i) => {
					var frame = (
						<div key={i} className="youtube">
							<iframe
								width="560"
								height="315"
								src={link}
								frameBorder="0"
								allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
					);
					return frame;
				})}

				{this.frame}
			</div>
		);
	}
}

export default Youtube;
