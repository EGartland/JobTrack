import React from 'react'
import { TextField, Button, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Select, Input, MenuItem, InputLabel } from '@material-ui/core'
import API from '../utils/API'
import { isNull } from 'util';

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
		appliedDate: new Date().toISOString().substring(0, 10),
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
			let {appliedDate, interview, ...rest} = job
			appliedDate = appliedDate.substring(0, 10)
			interview = interview.toString()
			console.log(appliedDate, rest, interview)
			this.setState({appliedDate, interview, ...rest, jobId: id, update: true, title: 'Update job' })
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
			appliedDate: new Date().toISOString().substring(0, 10),
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
		let { jobTitle, companyName, status, interview, phone, email, appliedDate } = this.state
		isNull(appliedDate) || appliedDate === '' ? this.setState({appliedDate: new Date()}) : appliedDate
		if (this.state.update) {
			await API.updateJob(this.state.jobId, {
				jobTitle,
				companyName,
				status,
				interview,
				phone,
				email,
				appliedDate,
			})
			this.setState({ update: false })
		} else {
			console.log(appliedDate)
			let job = await API.addJob(this.state.uid, {
				jobTitle,
				companyName,
				status,
				interview,
				phone,
				email,
				appliedDate,
			})
			const errors = []
			let errorList = job.errors
			for (const key in errorList) {
				this.setState({[key]: true})
				let err = errorList[key]
				let str = `${key} ${err.kind}`
				errors.push(str)
			}
			this.setState({ errMsg: errors })
			if (job.message) {
				this.setState({ error: true, errMsg: errors })
			} else {
				this.setState({
					msg: 'job created successfully!'
				})
				setTimeout(this.reset, 1000)
			}
		}
	}
	async updateUser() {
		if(sessionStorage.getItem('user')) {
			let user = JSON.parse(sessionStorage.getItem('user'))
			let updated = API.getUser(user._id)
			sessionStorage.setItem('user', JSON.stringify(updated))
		}
	}

	render() {
		// console.log(this.state)
		return (
			<div>
				<p>{this.state.title}</p>
				<form onSubmit={this.onSubmit}>
					<TextField
						label='Job Title *'
						value={this.state.jobTitle}
						name='jobTitle'
						margin='normal'
						onChange={this.handleChange}
						error={this.state.jobTitleErr || this.state.jobTitle.length < 3}
					/>
					<br/>
					<TextField
						label='Company Name *'
						value={this.state.companyName}
						name='companyName'
						margin='normal'
						onChange={this.handleChange}
						error={this.state.companyNameErr || this.state.jobTitle.length < 3}
					/>
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
					<TextField // change this to select for Boolean
						// label='Interview'
						value={this.state.interview}
						name='interview'
						margin='normal'
						onChange={this.handleChange}
						type='radio'
					/>
					<br />
					<TextField
						label='Contact Phone'
						value={this.state.phone}
						name='phone'
						margin='normal'
						onChange={this.handleChange}
						id="phone"
						type='tel'
					/>
					<br/>
					<TextField
						label='Contact Email'
						value={this.state.email}
						name='email'
						margin='normal'
						onChange={this.handleChange}
						type='email'
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
					/>
					{this.state.msg && this.state.msg !== '' && <p>{this.state.msg}</p>}
					{this.state.error && <p>Error: {this.state.errMsg.join(' | ')}</p>}
					<br />
					<br />
					<Button type='submit'>{this.state.update ? 'Update' : 'Submit'}</Button>
				</form>
			</div>
		)
	}
}

export default JobForm
