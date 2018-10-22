import React, { Component } from 'react'
import API from '../utils/API'
import { Link } from 'react-router-dom'

class Jobs extends Component {

	state = {
		jobs: []
	}

	async componentDidMount() {
			let user = await API.getUser(this.props.uid)
			this.setState({jobs: user.job})	
	}

	async handleDelete(id) {
		await API.deleteJob(id)
		this.updateJobs()
	}

	async updateJobs() {
		let user = await API.getUser(this.props.uid)
		console.log(user)
		sessionStorage.setItem('user', JSON.stringify(user))
		this.setState({jobs: user.job})
	}

	render() {
		return (
			<div>
				<p>My Jobs</p>
				{this.state.jobs.length === 0 && <p>You have no jobs to display.</p>}
				{this.state.jobs.length > 0 && 
					<ul>
						{this.state.jobs.map(job => <li key={job._id}>{job.jobTitle} | {job.companyName} | {job.status} | <button><Link to={`/job/${job._id}`} style={{ textDecoration: 'none' }}>Update</Link></button> | <button onClick={() => this.handleDelete(job._id)}>Delete</button></li>)}
					</ul>
				}
			</div>
		)
	}
}

export default Jobs