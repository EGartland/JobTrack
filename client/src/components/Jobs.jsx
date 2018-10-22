import React, { Component } from 'react'
import API from '../utils/API'

class Jobs extends Component {

	state = {
		jobs: []
	}

	async componentDidMount() {
		let user = await API.getUser(this.props.uid)
		console.log(user)
		this.setState({jobs: user.job})
		console.log(this.state.jobs)
	}

	async handleDelete(id) {
		await API.deleteJob(id)
		this.updateJobs()
	}

	async updateJobs() {
		let user = await API.getUser(this.props.uid)
		console.log(user)
		this.setState({jobs: user.job})
	}

	render() {
		console.log(this.props.uid)
		return (
			<div>
				<p>My Jobs</p>
				{this.state.jobs.length === 0 && <p>You have no jobs to display.</p>}
				{this.state.jobs.length > 0 && 
					<ul>
						{this.state.jobs.map(job => <li key={job._id}>{job.jobTitle} | {job.companyName} | {job.status} | Update | <button onClick={() => this.handleDelete(job._id)}>Delete</button></li>)}
					</ul>
				}
			</div>
		)
	}
}

export default Jobs