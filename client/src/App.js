import React, { Component } from 'react';
import { LoginForm } from './components'
import withRoot from './withRoot'
import { Typography } from '@material-ui/core'
import API from './utils/API'



class App extends Component {
	state = {
		user: {},
		type: 'login'
	}

  async componentDidMount() {
	  
  }

  setUser(user) {
	  this.setState({ user })
  }

  render() {
    return (
      <div className="App">

		<Typography align='center' variant='headline'>Home Page</Typography>

		{!this.state.user.name && this.state.type === 'register' && <LoginForm setUser={this.setUser} />}
		{!this.state.user.name && this.state.type === 'login' && <LoginForm setUser={this.setUser} login/>}

      </div>
    );
  }
}

export default withRoot(App);
