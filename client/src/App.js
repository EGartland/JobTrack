import React, { Component } from 'react';
import { LoginForm } from './components'
import withRoot from './withRoot'
import { Typography } from '@material-ui/core'
import API from './utils/API'



class App extends Component {
	state = {
		user: {},
		auth: false
	}

  async componentDidMount() {

  }

  setUser = (user) => {
	  this.setState({ user, auth: true })
  }

  render() {
    return (
      <div className="App">

		<Typography align='center' variant='headline'>Home Page</Typography>

		{!this.state.user.name && !this.state.auth && <LoginForm setUser={this.setUser}/>}
		{this.state.auth && <p>Welcome {this.state.user.niceName}</p>}

      </div>
    );
  }
}

export default withRoot(App);
