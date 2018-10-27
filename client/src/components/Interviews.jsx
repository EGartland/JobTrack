import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import API from '../utils/API'
import { Typography } from '@material-ui/core';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const CustomTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 10,
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
	row: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
	msg: {
		marginTop: theme.spacing.unit * 10,		
	},
	snackbar: {
        backgroundColor: theme.palette.secondary.main,
		width: 'flex',
		height: 75,
    },
});

// let id = 0;
// function createData(name, interviewNum, time, date, location, notes) {
// 	id += 1;
// 	return { id, name, interviewNum, time, date, location, notes };
// }

// const rows = [
// 	createData('Cerner', 2, '3:45PM', '10/29', 'NKC', 'Bring MacBook'),
// 	createData('Saint Lukes', 1, '10:00AM', '11/03', 'Plaza', 'Dr. Jones refferal'),
// 	createData('Google Fiber', 0, '12:00PM', '10/30', 'Discord', 'Add contact for remote interview'),
// 	createData('Trilogy', 0, '2:00PM', '11/07', 'Overland Park', 'Phone Interview'),
// 	createData('Sprint', 1, '1:45PM', '11/10', 'Leawood', '2nd Floor, Suite #211'),
// ];

class Interviews extends Component {
	state = {
		jobs: []
	}
	async componentDidMount() {
		let user = await API.getUser(this.props.uid)
		// console.log(user.job)
		let interviews = user.job.filter(job => job.interview)
		this.setState({ jobs: interviews })
	}
	render() {
		const { classes } = this.props;
		// console.log(this.state)
		const convertedDate = (dateToConvert) => {
			if (dateToConvert) 
			{const date = dateToConvert.substring(0, 10).split('-')
			const [ year, month, day ] = date
			return `${month}/${day}/${year}`
		}
		}
		const convertTime = t => {
			if(t) {
				let time = t.split(':')
				let [hour] = time
				let foo = 'AM' // really dont know what this is called, so now its foo
				if(hour > 12) {
					time.shift()
					time.unshift(hour - 12)
					foo = 'PM'
					console.log(hour)
				}
				return time.join(':') + ' ' + foo
			}
		}

		return (
			<div>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
			<SnackbarContent className={classes.snackbar} message='Interviews' variant='h6' />
			{this.state.jobs.length === 0 && <Typography className={classes.msg}>You dont have any interviews :(</Typography>}
			<Paper className={classes.root}>
				{this.state.jobs.length > 0 && <Table className={classes.table}>
					<TableHead>
						<TableRow>
							<CustomTableCell></CustomTableCell>
							<CustomTableCell>Company Name</CustomTableCell>
							<CustomTableCell numeric>Interview #</CustomTableCell>
							<CustomTableCell numeric>Time</CustomTableCell>
							<CustomTableCell numeric>Date</CustomTableCell>
							<CustomTableCell>Location</CustomTableCell>
							{/* <CustomTableCell>Notes</CustomTableCell> */}
						</TableRow>
					</TableHead>
					<TableBody>
						{this.state.jobs.map((job, i) => (
							<TableRow className={classes.row} key={i}>
								<CustomTableCell padding="checkbox"><Checkbox name="cBox" /></CustomTableCell>
								<CustomTableCell component="th" scope="row">
									{job.companyName}
								</CustomTableCell>
								<CustomTableCell numeric>{i + 1}</CustomTableCell>
								<CustomTableCell numeric>{convertTime(job.interviewTime)}</CustomTableCell>
								<CustomTableCell numeric>{convertedDate(job.interviewDate)}</CustomTableCell>
								<CustomTableCell>{job.location}</CustomTableCell>
								{/* <CustomTableCell>{job.notes}</CustomTableCell> */}
							</TableRow>
						))}
					</TableBody>
				</Table>}
			</Paper>
			</div>
		);
	}
}

Interviews.propTypes = {
	classes: PropTypes.object.isRequired,
	uid: PropTypes.string.isRequired
};

export default withStyles(styles)(Interviews);