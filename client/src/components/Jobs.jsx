import React, { Component } from 'react'

class Jobs extends Component {

	state = {

	}

	componentDidMount() {

	}

	render() {
		console.log(this.props.user)
		return (
			<React.Fragment>
			<h1>My Jobs</h1>
			{this.props.user && this.props.user.job.map(job => (
				<li>{job.jobTitle}</li>
			))}
			</React.Fragment>
		)
	}
}

export default Jobs