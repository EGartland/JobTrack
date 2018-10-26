import React from 'react'
import { TextField, Button, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Select, Input, MenuItem, InputLabel } from '@material-ui/core'
import API from '../utils/API';
import { isNull } from 'util';
import { withStyles } from '@material-ui/core/styles';
import '../styles/jobForm.css'

const styles = {
	body: {
		width: '58%',
	},
}

const currentDate = () => new Date().toISOString().substring(0, 10)

class JobForm extends React.Component {

	state = {
		title: 'Add new job',
		update: false,
		jobTitle: '',
		companyName: '',
		status: 'Applied',
		interview: 'false',
		phone: '',
		email: '',
		appliedDate: currentDate(),
		interviewDate: currentDate(),
		interviewTime: '',
		location: '',
		errMsg: [],
		error: false,
		jobTitleErr: false,
		companyNameErr: false,
		msg: ''
	}

	async componentDidMount() {
		if (this.props.match.params.id) {
			let { id } = this.props.match.params
			let job = await API.getJob(id)
			console.log(job)
			let { appliedDate, interview, interviewDate, ...rest } = job
			appliedDate = appliedDate.substring(0, 10)
			interviewDate = interviewDate.substring(0, 10)
			interview = interview.toString()
			// console.log(appliedDate, rest, interview)
			this.setState({ appliedDate, interview, interviewDate, ...rest, jobId: id, update: true, title: 'Update job' })
		} else {
			this.reset()
		}
	}

	reset = () => {
		let user = JSON.parse(sessionStorage.getItem('user'))
		console.log(user._id)
		this.setState({
			uid: user._id,
			update: false,
			jobTitle: '',
			companyName: '',
			status: 'Applied',
			interview: 'false',
			phone: '',
			email: '',
			appliedDate: currentDate(),
			interviewDate: currentDate(),
			interviewTime: '',
			location: '',
			errMsg: [],
			error: false,
			jobTitleErr: false,
			companyNameErr: false,
		})
	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({
			[name]: value,
			error: false,
			errMsg: [],
			jobTitleErr: false,
			companyNameErr: false,
			msg: ''
		})
	}
	onSubmit = async (e) => {
		e.preventDefault()
		this.setState({
			error: false,
			errMsg: [],
			jobTitleErr: false,
			companyNameErr: false,
		})
		let { jobTitle, companyName, status, interview, phone, email, appliedDate, interviewDate, interviewTime, location } = this.state
		isNull(appliedDate) || appliedDate === '' ? this.setState({ appliedDate: new Date() }) : appliedDate
		let hasContact = phone !== '' || email !== '' ? true : false
		// console.log(phone, email, hasContact)
		if (this.state.update) {
			let job = await API.updateJob(this.state.jobId, {
				jobTitle,
				companyName,
				status,
				interview,
				phone,
				email,
				appliedDate,
				interviewDate,
				interviewTime,
				location,
				hasContact
			})
			this.setState({ update: false, msg: 'Job updated' })
			// console.log(job)
		} else {
			// console.log(appliedDate)
			let job = await API.addJob(this.state.uid, {
				jobTitle,
				companyName,
				status,
				interview,
				phone,
				email,
				appliedDate,
				interviewDate,
				interviewTime,
				location,
				hasContact
			})
			const errors = []
			let errorList = job.errors
			for (const key in errorList) {
				this.setState({ [key]: true })
				let err = errorList[key]
				let str = `${key} ${err.kind}`
				errors.push(str)
			}
			this.setState({ errMsg: errors })
			if (job.message) {
				this.setState({ error: true, errMsg: errors })
			} else {
				this.setState({
					msg: 'Job added!'
				})
				setTimeout(this.reset, 1000)
			}
			// console.log(job)
		}

	}
	async updateUser() {
		if (sessionStorage.getItem('user')) {
			let user = JSON.parse(sessionStorage.getItem('user'))
			let updated = API.getUser(user._id)
			sessionStorage.setItem('user', JSON.stringify(updated))
		}
	}

	render() {
		// console.log(this.state)
		return (
			<div className='container'>
				<br></br>
				<p>{this.state.title}</p>
				<form className='jobContainer' onSubmit={this.onSubmit}>
					<TextField
						label='Job Title *'
						value={this.state.jobTitle}
						name='jobTitle'
						margin='normal'
						onChange={this.handleChange}
						error={this.state.jobTitleErr || this.state.jobTitle.length < 3}
						fullWidth={true}

					/>
					<br />
					<TextField
						label='Company Name *'
						value={this.state.companyName}
						name='companyName'
						margin='normal'
						onChange={this.handleChange}
						error={this.state.companyNameErr || this.state.jobTitle.length < 3}
						fullWidth={true}
					/>
					<br />
					<br />
					<br />
					<TextField
						label='Contact Phone'
						value={this.state.phone}
						name='phone'
						margin='normal'
						onChange={this.handleChange}
						id="phone"
						type='tel'
						fullWidth={true}
					/>
					<br />
					<TextField
						label='Contact Email'
						value={this.state.email}
						name='email'
						margin='normal'
						onChange={this.handleChange}
						type='email'
						fullWidth={true}
					/>
					<br />
					<TextField
						// label='Applied Date'
						value={this.state.appliedDate}
						name='appliedDate'
						margin='normal'
						onChange={this.handleChange}
						type='date'
						max={new Date().toISOString().substring(0, 9)}
						fullWidth={true}
					/>
					{/* {this.state.msg && this.state.msg !== '' && <p>{this.state.msg}</p>}
					{this.state.error && <p>Error: {this.state.errMsg.join(' | ')}</p>} */}
					<br />
					<br />
					<FormControl>
						<InputLabel shrink htmlFor="Status-label-placeholder">
							Status
          				</InputLabel>
						<Select
							value={this.state.status}
							onChange={this.handleChange}
							input={<Input name="status" />}
							displayEmpty
							name="status"
						// className={classes.selectEmpty}
						>
							<MenuItem value='Applied'>Applied</MenuItem>
							<MenuItem value='Interview'>Interview</MenuItem>
							<MenuItem value='Interviewed'>Interviewed</MenuItem>
							<MenuItem value='Follow Up'>Follow-Up</MenuItem>
							<MenuItem value='Letter Sent'>Thank-You letter sent</MenuItem>
							<MenuItem value='Accepted'>Accepted</MenuItem>
						</Select>
					</FormControl>
					<br />
					<br />
					<FormControl component="fieldset" >
						<FormLabel component="legend">Interview</FormLabel>
						<RadioGroup
							aria-label="interview"
							name="interview"
							// className={classes.group}
							value={this.state.interview}
							onChange={this.handleChange}
						>
							<FormControlLabel
								value='true'
								control={<Radio color="primary" />}
								label='Yes'
							// labelPlacement="start"

							/>
							<FormControlLabel
								value='false'
								// name={false}
								control={<Radio color="primary" />}
								label='No'
							// labelPlacement="start"

							/>
						</RadioGroup>
					</FormControl>
					{this.state.interview === 'true' && (
						<div>
							<TextField
								// label='Applied Date'
								value={this.state.interviewDate}
								name='interviewDate'
								margin='normal'
								onChange={this.handleChange}
								type='date'
								// max={new Date().toISOString().substring(0, 9)}
								fullWidth={true}
							/>
							<TextField
								// label='Applied Date'
								value={this.state.interviewTime}
								name='interviewTime'
								margin='normal'
								onChange={this.handleChange}
								type='time'
								// max={new Date().toISOString().substring(0, 9)}
								fullWidth={true}
							/>
							<TextField
								label='Location'
								value={this.state.location}
								name='location'
								margin='normal'
								onChange={this.handleChange}
								fullWidth={true}
							/>
						</div>
					)}
					<br></br>
					{this.state.msg && this.state.msg !== '' && <p>{this.state.msg}</p>}
					{this.state.error && <p>Error: {this.state.errMsg.join(' | ')}</p>}
					<Button id='submitBtn' type='submit'>{this.state.update ? 'Update' : 'Submit'}</Button>
				</form>
			</div>
		)
	}
}

export default withStyles(styles)(JobForm)
