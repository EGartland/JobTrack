import React from 'react'

class JobForm extends React.Component {
	state = {
		user: {}
	}
	render() {
		console.log(this.props.uid)
		return (<p>hi</p>
			// <div>{this.props.user.niceName}</div>
		)
	}
}

export default JobForm
