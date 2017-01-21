import React, { Component } from 'react';

export default class Voting extends Component {

	renderVotes() {
		return this.props.pair.map((entry) => {
			return (
				<button key={entry}>
					<h1>{entry}</h1>
				</button>
			);
		});
	};

	render() {
		return (
			<div className="voting">
				{this.renderVotes()}
			</div>
		)
	}
}