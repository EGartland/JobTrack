import React, { Component } from 'react'

class Home extends Component {
	state = {
		user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : {}
	}
	componentDidMount() {
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