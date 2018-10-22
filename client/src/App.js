import React, { Component } from 'react';
import { LoginForm } from './components'
import withRoot from './withRoot'
import { Typography } from '@material-ui/core'
// import API from './utils/API';
import Dashboard from './components/Dashboard/Dashboard'


class App extends Component {
	state = {
		user: {},
		auth: false
	}

  async componentDidMount() {
 
  }

  setUser = (user) => {
	  this.setState({ user, auth: true })
	//   console.log(this.state.user)
  }

  render() {
    return (
      <div className="App">

		<Typography align='center' variant='headline'>Home Page</Typography>

		{!this.state.user.name && !this.state.auth && <LoginForm login setUser={this.setUser}/>}
		{this.state.auth && this.state.user.niceName && < Dashboard user={this.state.user} />}

      </div>
    );
  }
}

export default withRoot(App);
