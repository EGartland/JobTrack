import React, { Component } from 'react'

class Home extends Component {
	state = {
		user: {}
	}
	componentDidMount() {
		if(sessionStorage.getItem('user')) this.setState({ user: JSON.parse(sessionStorage.getItem('user')) })
	}

	render() {
		return (
			<div>
				<p>Welcome {this.state.user.niceName}!</p>
			</div>
		)
	}
}
export default Home