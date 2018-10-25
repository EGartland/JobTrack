import React from 'react'
import API from '../utils/API'
import { Link } from 'react-router-dom'
import { Card, Typography } from '@material-ui/core'

class Interviews extends React.Component {
	state = {
		jobs: []
	}

	async componentDidMount() {
		let user = await API.getUser(this.props.uid)
		this.setState({ jobs: user.job })
	}

	render() {
		const convertedDate = (dateToConvert) => {
			const date = dateToConvert.substring(0, 10).split('-')
			const [ year, month, day ] = date
			return `${month}/${day}/${year}`
		}
		return (
			<div>
				<br></br>
				<p>My Interviews</p>
				{this.state.jobs.length === 0 && <p>You have no jobs to display.</p>}
				{this.state.jobs.length > 0 &&
					<ul>
						{this.state.jobs.map(job => {
							if(job.interview) {
							return (<Card id='card' key={job._id}>
							<Typography>Position: {job.jobTitle}</Typography>
							<Typography>Company: {job.companyName}</Typography>
							<Typography>Status: {job.status}</Typography>
							{/* this company contact should be better, lemme think on it */}
							{job.phone.trim() !== '' && <Typography>Company Contact: {job.phone !== '' && `Phone: ${job.phone}`} | {job.email !== '' && `Email: ${job.email}`}</Typography>}
							<Typography>Date Applied: {convertedDate(job.appliedDate)}</Typography>

							<button className='jobBtn'><Link to={`/job/${job._id}`} style={{ textDecoration: 'none' }}>Update</Link></button> | <button className='jobBtn' onClick={() => this.handleDelete(job._id)}>Delete</button>
							</Card>)}})
							}
					</ul>
				}
			</div>
		)
	}
}

export default Interviews