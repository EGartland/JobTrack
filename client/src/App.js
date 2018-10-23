import React, { Component } from 'react';
import { LoginForm } from './components'
import withRoot from './withRoot'
import { Typography } from '@material-ui/core'
import {Dashboard}  from './components'

class App extends Component {
	state = {
		user: {},
		auth: false
	}

  async componentDidMount() {
	if(sessionStorage.getItem('user')) this.setUser(JSON.parse(sessionStorage.getItem('user')))
  }

  setUser = (user) => {
	  this.setState({ user, auth: true })
	  sessionStorage.setItem('user', JSON.stringify(user))
  }

  handleLogout = () => {
	this.setState({
		user: {},
		auth: false
	})
	if(sessionStorage.getItem('user')) sessionStorage.removeItem('user')
  }


  render() {
    return (
      <div className="App">
		<Typography align='center' variant='headline'>Job Track</Typography>
		{!this.state.user.name && !this.state.auth && <LoginForm login setUser={this.setUser}/>}
		{this.state.auth && this.state.user.niceName && < Dashboard logout={this.handleLogout} user={this.state.user} />}
      </div>
    );
  }
}

export default withRoot(App);
