import React, { Component } from 'react'
import API from '../utils/API'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import '../styles/jobTab.css'
import { Typography } from '@material-ui/core';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Button from '@material-ui/core/Button';


const styles = theme => ({
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
	snackbar: {
		backgroundColor: theme.palette.secondary.main,
		width: 'flex',
		height: 75,
},
button: {
	margin: theme.spacing.unit,
},
input: {
	display: 'none',
},

  });




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
		sessionStorage.setItem('user', JSON.stringify(user))
		this.setState({jobs: user.job})
		
	}
	render() {
		const { classes } = this.props;
		const convertedDate = (dateToConvert) => {
			const date = dateToConvert.substring(0, 10).split('-')
			const [ year, month, day ] = date
			return `${month}/${day}/${year}`
		}
		return (
			
			<div>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<SnackbarContent className={classes.snackbar} message='Jobs Applied For' variant='h6' />
				<br></br>
				{this.state.jobs.length === 0 && <p>You have no jobs to display.</p>}
				{this.state.jobs.length > 0 && 
					<ul>
						{this.state.jobs.map(job => <Card id='card' key={job._id}>
						<Typography>Position: {job.jobTitle}</Typography> 
						<Typography>Company: {job.companyName}</Typography>
						<Typography>Status: {job.status}</Typography>
						<Typography>Company Contact: {job.phone}</Typography>
						<Typography>Date Applied: {convertedDate(job.appliedDate)}</Typography>
						<Link to={`/job/${job._id}`} style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" className={classes.button}>Update</Button></Link>
						 <Button variant="contained" color="primary" className={classes.button} onClick={() => this.handleDelete(job._id)}>Delete</Button></Card>)}
					</ul>
				}
			</div>
		)
	}
}

export default withStyles(styles)(Jobs)