import React, { Component } from 'react'
import API from '../utils/API'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import '../styles/jobTab.css'
import { Typography } from '@material-ui/core';
const styles = {
	card: {
	  minWidth: 275,
	},
	bullet: {
	  display: 'inline-block',
	  margin: '0 2px',
	  transform: 'scale(0.8)',
	},
	title: {
	  fontSize: 14,
	},
	pos: {
	  marginBottom: 12,
	},
  };




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
						{this.state.jobs.map(job => <Card id='card' key={job._id}>
						<Typography>Position: {job.jobTitle}</Typography> 
						<Typography>Company: {job.companyName}</Typography>
						<Typography>Status: {job.status}</Typography>
						<Typography>Company Contact: {job.phone}</Typography>{job.appliedDate} |  Company Contact: {job.phone}<button class='jobBtn'><Link to={`/job/${job._id}`} style={{ textDecoration: 'none' }}>Update</Link></button> | <button class='jobBtn' onClick={() => this.handleDelete(job._id)}>Delete</button></Card>)}
					</ul>
				}
			</div>
		)
	}
}

export default withStyles(styles)(Jobs)